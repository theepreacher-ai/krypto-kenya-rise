
-- Create custom types for the platform
CREATE TYPE user_kyc_status AS ENUM ('pending', 'in_progress', 'approved', 'rejected');
CREATE TYPE transaction_type AS ENUM ('deposit', 'withdraw', 'buy', 'sell', 'transfer', 'reward');
CREATE TYPE transaction_status AS ENUM ('pending', 'processing', 'completed', 'failed', 'cancelled');
CREATE TYPE currency_type AS ENUM ('BTC', 'ETH', 'USDT', 'KES');
CREATE TYPE education_resource_type AS ENUM ('video', 'article', 'quiz', 'tutorial');
CREATE TYPE notification_type AS ENUM ('transaction', 'kyc', 'market_alert', 'education', 'referral');

-- Users table with comprehensive profile management
CREATE TABLE public.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    phone TEXT UNIQUE NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    date_of_birth DATE,
    national_id TEXT UNIQUE,
    kyc_status user_kyc_status DEFAULT 'pending',
    kyc_documents JSONB,
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    referral_code TEXT UNIQUE,
    referred_by UUID REFERENCES public.users(id),
    last_login_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User wallets for multi-currency support
CREATE TABLE public.wallets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    currency currency_type NOT NULL,
    balance DECIMAL(20, 8) DEFAULT 0.00000000,
    available_balance DECIMAL(20, 8) DEFAULT 0.00000000,
    locked_balance DECIMAL(20, 8) DEFAULT 0.00000000,
    wallet_address TEXT,
    private_key_encrypted TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, currency)
);

-- Comprehensive transaction tracking
CREATE TABLE public.transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    from_wallet_id UUID REFERENCES public.wallets(id),
    to_wallet_id UUID REFERENCES public.wallets(id),
    transaction_type transaction_type NOT NULL,
    currency currency_type NOT NULL,
    amount DECIMAL(20, 8) NOT NULL,
    fee DECIMAL(20, 8) DEFAULT 0.00000000,
    exchange_rate DECIMAL(20, 8),
    status transaction_status DEFAULT 'pending',
    blockchain_tx_hash TEXT,
    mpesa_transaction_id TEXT,
    reference_number TEXT UNIQUE,
    notes TEXT,
    metadata JSONB,
    processed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trading orders and history
CREATE TABLE public.trading_orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    order_type TEXT NOT NULL CHECK (order_type IN ('market', 'limit', 'stop')),
    side TEXT NOT NULL CHECK (side IN ('buy', 'sell')),
    base_currency currency_type NOT NULL,
    quote_currency currency_type NOT NULL,
    quantity DECIMAL(20, 8) NOT NULL,
    price DECIMAL(20, 8),
    filled_quantity DECIMAL(20, 8) DEFAULT 0.00000000,
    remaining_quantity DECIMAL(20, 8),
    status TEXT DEFAULT 'open' CHECK (status IN ('open', 'partially_filled', 'filled', 'cancelled')),
    total_value DECIMAL(20, 8),
    fees_paid DECIMAL(20, 8) DEFAULT 0.00000000,
    executed_at TIMESTAMP WITH TIME ZONE,
    expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Educational content management
CREATE TABLE public.education_resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    content_type education_resource_type NOT NULL,
    content_url TEXT,
    content_data JSONB,
    difficulty_level INTEGER CHECK (difficulty_level BETWEEN 1 AND 5),
    reward_points INTEGER DEFAULT 0,
    estimated_duration INTEGER, -- in minutes
    tags TEXT[],
    is_published BOOLEAN DEFAULT FALSE,
    view_count INTEGER DEFAULT 0,
    completion_count INTEGER DEFAULT 0,
    created_by UUID REFERENCES public.users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User education progress tracking
CREATE TABLE public.user_education_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    resource_id UUID NOT NULL REFERENCES public.education_resources(id) ON DELETE CASCADE,
    progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage BETWEEN 0 AND 100),
    is_completed BOOLEAN DEFAULT FALSE,
    quiz_score INTEGER,
    time_spent INTEGER DEFAULT 0, -- in minutes
    points_earned INTEGER DEFAULT 0,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, resource_id)
);

-- Social trading features
CREATE TABLE public.trader_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE UNIQUE,
    display_name TEXT NOT NULL,
    bio TEXT,
    avatar_url TEXT,
    total_followers INTEGER DEFAULT 0,
    total_trades INTEGER DEFAULT 0,
    win_rate DECIMAL(5, 2) DEFAULT 0.00,
    total_profit_loss DECIMAL(20, 8) DEFAULT 0.00000000,
    risk_score INTEGER CHECK (risk_score BETWEEN 1 AND 10),
    is_public BOOLEAN DEFAULT FALSE,
    is_verified_trader BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Copy trading relationships
CREATE TABLE public.copy_trading (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    follower_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    trader_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    allocation_percentage DECIMAL(5, 2) CHECK (allocation_percentage BETWEEN 0.01 AND 100.00),
    max_allocation_amount DECIMAL(20, 8),
    is_active BOOLEAN DEFAULT TRUE,
    auto_copy BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(follower_id, trader_id)
);

-- Referral system
CREATE TABLE public.referrals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    referrer_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    referred_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    referral_code TEXT NOT NULL,
    reward_amount DECIMAL(20, 8) DEFAULT 0.00000000,
    reward_currency currency_type DEFAULT 'USDT',
    is_reward_claimed BOOLEAN DEFAULT FALSE,
    reward_claimed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(referrer_id, referred_id)
);

-- KYC verification documents
CREATE TABLE public.kyc_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    document_type TEXT NOT NULL CHECK (document_type IN ('national_id', 'passport', 'driving_license', 'utility_bill', 'bank_statement')),
    document_url TEXT NOT NULL,
    verification_status user_kyc_status DEFAULT 'pending',
    verification_notes TEXT,
    verified_by UUID REFERENCES public.users(id),
    verified_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tax reporting and compliance
CREATE TABLE public.tax_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    reporting_year INTEGER NOT NULL,
    total_gains DECIMAL(20, 8) DEFAULT 0.00000000,
    total_losses DECIMAL(20, 8) DEFAULT 0.00000000,
    tax_liability DECIMAL(20, 8) DEFAULT 0.00000000,
    report_data JSONB NOT NULL,
    generated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, reporting_year)
);

-- System notifications
CREATE TABLE public.notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    notification_type notification_type NOT NULL,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    data JSONB,
    is_read BOOLEAN DEFAULT FALSE,
    is_sent BOOLEAN DEFAULT FALSE,
    sent_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Market data cache
CREATE TABLE public.market_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    symbol TEXT NOT NULL,
    base_currency currency_type NOT NULL,
    quote_currency currency_type NOT NULL,
    current_price DECIMAL(20, 8) NOT NULL,
    volume_24h DECIMAL(20, 8),
    price_change_24h DECIMAL(10, 4),
    price_change_percentage_24h DECIMAL(10, 4),
    market_cap DECIMAL(20, 8),
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(base_currency, quote_currency)
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON public.users(email);
CREATE INDEX idx_users_phone ON public.users(phone);
CREATE INDEX idx_users_kyc_status ON public.users(kyc_status);
CREATE INDEX idx_users_referral_code ON public.users(referral_code);

CREATE INDEX idx_wallets_user_id ON public.wallets(user_id);
CREATE INDEX idx_wallets_currency ON public.wallets(currency);
CREATE INDEX idx_wallets_user_currency ON public.wallets(user_id, currency);

CREATE INDEX idx_transactions_user_id ON public.transactions(user_id);
CREATE INDEX idx_transactions_status ON public.transactions(status);
CREATE INDEX idx_transactions_type ON public.transactions(transaction_type);
CREATE INDEX idx_transactions_created_at ON public.transactions(created_at);
CREATE INDEX idx_transactions_reference ON public.transactions(reference_number);

CREATE INDEX idx_trading_orders_user_id ON public.trading_orders(user_id);
CREATE INDEX idx_trading_orders_status ON public.trading_orders(status);
CREATE INDEX idx_trading_orders_created_at ON public.trading_orders(created_at);

CREATE INDEX idx_education_progress_user_id ON public.user_education_progress(user_id);
CREATE INDEX idx_education_progress_resource_id ON public.user_education_progress(resource_id);

CREATE INDEX idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX idx_notifications_read ON public.notifications(is_read);
CREATE INDEX idx_notifications_created_at ON public.notifications(created_at);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trading_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_education_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.copy_trading ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.kyc_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tax_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users can view their own profile" ON public.users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.users
    FOR UPDATE USING (auth.uid() = id);

-- RLS Policies for wallets table
CREATE POLICY "Users can view their own wallets" ON public.wallets
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own wallets" ON public.wallets
    FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for transactions table
CREATE POLICY "Users can view their own transactions" ON public.transactions
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own transactions" ON public.transactions
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for trading orders
CREATE POLICY "Users can view their own orders" ON public.trading_orders
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own orders" ON public.trading_orders
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own orders" ON public.trading_orders
    FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for education progress
CREATE POLICY "Users can view their own progress" ON public.user_education_progress
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress" ON public.user_education_progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can create their own progress" ON public.user_education_progress
    FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for notifications
CREATE POLICY "Users can view their own notifications" ON public.notifications
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own notifications" ON public.notifications
    FOR UPDATE USING (auth.uid() = user_id);

-- Function to generate unique referral codes
CREATE OR REPLACE FUNCTION generate_referral_code() RETURNS TEXT AS $$
DECLARE
    code TEXT;
BEGIN
    LOOP
        code := upper(substring(md5(random()::text) from 1 for 8));
        EXIT WHEN NOT EXISTS (SELECT 1 FROM public.users WHERE referral_code = code);
    END LOOP;
    RETURN code;
END;
$$ LANGUAGE plpgsql;

-- Function to automatically create wallets for new users
CREATE OR REPLACE FUNCTION create_user_wallets()
RETURNS TRIGGER AS $$
BEGIN
    -- Create wallets for each supported currency
    INSERT INTO public.wallets (user_id, currency) VALUES
        (NEW.id, 'BTC'),
        (NEW.id, 'ETH'),
        (NEW.id, 'USDT'),
        (NEW.id, 'KES');
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to generate referral code on user creation
CREATE OR REPLACE FUNCTION set_referral_code()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.referral_code IS NULL THEN
        NEW.referral_code := generate_referral_code();
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers
CREATE TRIGGER trigger_create_user_wallets
    AFTER INSERT ON public.users
    FOR EACH ROW
    EXECUTE FUNCTION create_user_wallets();

CREATE TRIGGER trigger_set_referral_code
    BEFORE INSERT ON public.users
    FOR EACH ROW
    EXECUTE FUNCTION set_referral_code();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add update timestamp triggers to relevant tables
CREATE TRIGGER trigger_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER trigger_wallets_updated_at BEFORE UPDATE ON public.wallets FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER trigger_transactions_updated_at BEFORE UPDATE ON public.transactions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER trigger_trading_orders_updated_at BEFORE UPDATE ON public.trading_orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER trigger_education_resources_updated_at BEFORE UPDATE ON public.education_resources FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER trigger_trader_profiles_updated_at BEFORE UPDATE ON public.trader_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
