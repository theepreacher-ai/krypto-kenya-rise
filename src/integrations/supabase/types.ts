export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      copy_trading: {
        Row: {
          allocation_percentage: number | null
          auto_copy: boolean | null
          created_at: string | null
          follower_id: string
          id: string
          is_active: boolean | null
          max_allocation_amount: number | null
          trader_id: string
          updated_at: string | null
        }
        Insert: {
          allocation_percentage?: number | null
          auto_copy?: boolean | null
          created_at?: string | null
          follower_id: string
          id?: string
          is_active?: boolean | null
          max_allocation_amount?: number | null
          trader_id: string
          updated_at?: string | null
        }
        Update: {
          allocation_percentage?: number | null
          auto_copy?: boolean | null
          created_at?: string | null
          follower_id?: string
          id?: string
          is_active?: boolean | null
          max_allocation_amount?: number | null
          trader_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "copy_trading_follower_id_fkey"
            columns: ["follower_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "copy_trading_trader_id_fkey"
            columns: ["trader_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      education_resources: {
        Row: {
          completion_count: number | null
          content_data: Json | null
          content_type: Database["public"]["Enums"]["education_resource_type"]
          content_url: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          difficulty_level: number | null
          estimated_duration: number | null
          id: string
          is_published: boolean | null
          reward_points: number | null
          tags: string[] | null
          title: string
          updated_at: string | null
          view_count: number | null
        }
        Insert: {
          completion_count?: number | null
          content_data?: Json | null
          content_type: Database["public"]["Enums"]["education_resource_type"]
          content_url?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          difficulty_level?: number | null
          estimated_duration?: number | null
          id?: string
          is_published?: boolean | null
          reward_points?: number | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
          view_count?: number | null
        }
        Update: {
          completion_count?: number | null
          content_data?: Json | null
          content_type?: Database["public"]["Enums"]["education_resource_type"]
          content_url?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          difficulty_level?: number | null
          estimated_duration?: number | null
          id?: string
          is_published?: boolean | null
          reward_points?: number | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "education_resources_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      kyc_documents: {
        Row: {
          created_at: string | null
          document_type: string
          document_url: string
          id: string
          updated_at: string | null
          user_id: string
          verification_notes: string | null
          verification_status:
            | Database["public"]["Enums"]["user_kyc_status"]
            | null
          verified_at: string | null
          verified_by: string | null
        }
        Insert: {
          created_at?: string | null
          document_type: string
          document_url: string
          id?: string
          updated_at?: string | null
          user_id: string
          verification_notes?: string | null
          verification_status?:
            | Database["public"]["Enums"]["user_kyc_status"]
            | null
          verified_at?: string | null
          verified_by?: string | null
        }
        Update: {
          created_at?: string | null
          document_type?: string
          document_url?: string
          id?: string
          updated_at?: string | null
          user_id?: string
          verification_notes?: string | null
          verification_status?:
            | Database["public"]["Enums"]["user_kyc_status"]
            | null
          verified_at?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "kyc_documents_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "kyc_documents_verified_by_fkey"
            columns: ["verified_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      market_data: {
        Row: {
          base_currency: Database["public"]["Enums"]["currency_type"]
          current_price: number
          id: string
          last_updated: string | null
          market_cap: number | null
          price_change_24h: number | null
          price_change_percentage_24h: number | null
          quote_currency: Database["public"]["Enums"]["currency_type"]
          symbol: string
          volume_24h: number | null
        }
        Insert: {
          base_currency: Database["public"]["Enums"]["currency_type"]
          current_price: number
          id?: string
          last_updated?: string | null
          market_cap?: number | null
          price_change_24h?: number | null
          price_change_percentage_24h?: number | null
          quote_currency: Database["public"]["Enums"]["currency_type"]
          symbol: string
          volume_24h?: number | null
        }
        Update: {
          base_currency?: Database["public"]["Enums"]["currency_type"]
          current_price?: number
          id?: string
          last_updated?: string | null
          market_cap?: number | null
          price_change_24h?: number | null
          price_change_percentage_24h?: number | null
          quote_currency?: Database["public"]["Enums"]["currency_type"]
          symbol?: string
          volume_24h?: number | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          data: Json | null
          id: string
          is_read: boolean | null
          is_sent: boolean | null
          message: string
          notification_type: Database["public"]["Enums"]["notification_type"]
          sent_at: string | null
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          data?: Json | null
          id?: string
          is_read?: boolean | null
          is_sent?: boolean | null
          message: string
          notification_type: Database["public"]["Enums"]["notification_type"]
          sent_at?: string | null
          title: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          data?: Json | null
          id?: string
          is_read?: boolean | null
          is_sent?: boolean | null
          message?: string
          notification_type?: Database["public"]["Enums"]["notification_type"]
          sent_at?: string | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      referrals: {
        Row: {
          created_at: string | null
          id: string
          is_reward_claimed: boolean | null
          referral_code: string
          referred_id: string
          referrer_id: string
          reward_amount: number | null
          reward_claimed_at: string | null
          reward_currency: Database["public"]["Enums"]["currency_type"] | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_reward_claimed?: boolean | null
          referral_code: string
          referred_id: string
          referrer_id: string
          reward_amount?: number | null
          reward_claimed_at?: string | null
          reward_currency?: Database["public"]["Enums"]["currency_type"] | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_reward_claimed?: boolean | null
          referral_code?: string
          referred_id?: string
          referrer_id?: string
          reward_amount?: number | null
          reward_claimed_at?: string | null
          reward_currency?: Database["public"]["Enums"]["currency_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "referrals_referred_id_fkey"
            columns: ["referred_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tax_reports: {
        Row: {
          generated_at: string | null
          id: string
          report_data: Json
          reporting_year: number
          tax_liability: number | null
          total_gains: number | null
          total_losses: number | null
          user_id: string
        }
        Insert: {
          generated_at?: string | null
          id?: string
          report_data: Json
          reporting_year: number
          tax_liability?: number | null
          total_gains?: number | null
          total_losses?: number | null
          user_id: string
        }
        Update: {
          generated_at?: string | null
          id?: string
          report_data?: Json
          reporting_year?: number
          tax_liability?: number | null
          total_gains?: number | null
          total_losses?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tax_reports_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      trader_profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          display_name: string
          id: string
          is_public: boolean | null
          is_verified_trader: boolean | null
          risk_score: number | null
          total_followers: number | null
          total_profit_loss: number | null
          total_trades: number | null
          updated_at: string | null
          user_id: string
          win_rate: number | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          display_name: string
          id?: string
          is_public?: boolean | null
          is_verified_trader?: boolean | null
          risk_score?: number | null
          total_followers?: number | null
          total_profit_loss?: number | null
          total_trades?: number | null
          updated_at?: string | null
          user_id: string
          win_rate?: number | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          display_name?: string
          id?: string
          is_public?: boolean | null
          is_verified_trader?: boolean | null
          risk_score?: number | null
          total_followers?: number | null
          total_profit_loss?: number | null
          total_trades?: number | null
          updated_at?: string | null
          user_id?: string
          win_rate?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "trader_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      trading_orders: {
        Row: {
          base_currency: Database["public"]["Enums"]["currency_type"]
          created_at: string | null
          executed_at: string | null
          expires_at: string | null
          fees_paid: number | null
          filled_quantity: number | null
          id: string
          order_type: string
          price: number | null
          quantity: number
          quote_currency: Database["public"]["Enums"]["currency_type"]
          remaining_quantity: number | null
          side: string
          status: string | null
          total_value: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          base_currency: Database["public"]["Enums"]["currency_type"]
          created_at?: string | null
          executed_at?: string | null
          expires_at?: string | null
          fees_paid?: number | null
          filled_quantity?: number | null
          id?: string
          order_type: string
          price?: number | null
          quantity: number
          quote_currency: Database["public"]["Enums"]["currency_type"]
          remaining_quantity?: number | null
          side: string
          status?: string | null
          total_value?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          base_currency?: Database["public"]["Enums"]["currency_type"]
          created_at?: string | null
          executed_at?: string | null
          expires_at?: string | null
          fees_paid?: number | null
          filled_quantity?: number | null
          id?: string
          order_type?: string
          price?: number | null
          quantity?: number
          quote_currency?: Database["public"]["Enums"]["currency_type"]
          remaining_quantity?: number | null
          side?: string
          status?: string | null
          total_value?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "trading_orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          amount: number
          blockchain_tx_hash: string | null
          created_at: string | null
          currency: Database["public"]["Enums"]["currency_type"]
          exchange_rate: number | null
          fee: number | null
          from_wallet_id: string | null
          id: string
          metadata: Json | null
          mpesa_transaction_id: string | null
          notes: string | null
          processed_at: string | null
          reference_number: string | null
          status: Database["public"]["Enums"]["transaction_status"] | null
          to_wallet_id: string | null
          transaction_type: Database["public"]["Enums"]["transaction_type"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          blockchain_tx_hash?: string | null
          created_at?: string | null
          currency: Database["public"]["Enums"]["currency_type"]
          exchange_rate?: number | null
          fee?: number | null
          from_wallet_id?: string | null
          id?: string
          metadata?: Json | null
          mpesa_transaction_id?: string | null
          notes?: string | null
          processed_at?: string | null
          reference_number?: string | null
          status?: Database["public"]["Enums"]["transaction_status"] | null
          to_wallet_id?: string | null
          transaction_type: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          blockchain_tx_hash?: string | null
          created_at?: string | null
          currency?: Database["public"]["Enums"]["currency_type"]
          exchange_rate?: number | null
          fee?: number | null
          from_wallet_id?: string | null
          id?: string
          metadata?: Json | null
          mpesa_transaction_id?: string | null
          notes?: string | null
          processed_at?: string | null
          reference_number?: string | null
          status?: Database["public"]["Enums"]["transaction_status"] | null
          to_wallet_id?: string | null
          transaction_type?: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_from_wallet_id_fkey"
            columns: ["from_wallet_id"]
            isOneToOne: false
            referencedRelation: "wallets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_to_wallet_id_fkey"
            columns: ["to_wallet_id"]
            isOneToOne: false
            referencedRelation: "wallets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_education_progress: {
        Row: {
          completed_at: string | null
          created_at: string | null
          id: string
          is_completed: boolean | null
          points_earned: number | null
          progress_percentage: number | null
          quiz_score: number | null
          resource_id: string
          time_spent: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          is_completed?: boolean | null
          points_earned?: number | null
          progress_percentage?: number | null
          quiz_score?: number | null
          resource_id: string
          time_spent?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          is_completed?: boolean | null
          points_earned?: number | null
          progress_percentage?: number | null
          quiz_score?: number | null
          resource_id?: string
          time_spent?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_education_progress_resource_id_fkey"
            columns: ["resource_id"]
            isOneToOne: false
            referencedRelation: "education_resources"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_education_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          date_of_birth: string | null
          email: string
          first_name: string
          id: string
          is_active: boolean | null
          is_verified: boolean | null
          kyc_documents: Json | null
          kyc_status: Database["public"]["Enums"]["user_kyc_status"] | null
          last_login_at: string | null
          last_name: string
          national_id: string | null
          phone: string
          referral_code: string | null
          referred_by: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          date_of_birth?: string | null
          email: string
          first_name: string
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          kyc_documents?: Json | null
          kyc_status?: Database["public"]["Enums"]["user_kyc_status"] | null
          last_login_at?: string | null
          last_name: string
          national_id?: string | null
          phone: string
          referral_code?: string | null
          referred_by?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          date_of_birth?: string | null
          email?: string
          first_name?: string
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          kyc_documents?: Json | null
          kyc_status?: Database["public"]["Enums"]["user_kyc_status"] | null
          last_login_at?: string | null
          last_name?: string
          national_id?: string | null
          phone?: string
          referral_code?: string | null
          referred_by?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_referred_by_fkey"
            columns: ["referred_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      wallets: {
        Row: {
          available_balance: number | null
          balance: number | null
          created_at: string | null
          currency: Database["public"]["Enums"]["currency_type"]
          id: string
          is_active: boolean | null
          locked_balance: number | null
          private_key_encrypted: string | null
          updated_at: string | null
          user_id: string
          wallet_address: string | null
        }
        Insert: {
          available_balance?: number | null
          balance?: number | null
          created_at?: string | null
          currency: Database["public"]["Enums"]["currency_type"]
          id?: string
          is_active?: boolean | null
          locked_balance?: number | null
          private_key_encrypted?: string | null
          updated_at?: string | null
          user_id: string
          wallet_address?: string | null
        }
        Update: {
          available_balance?: number | null
          balance?: number | null
          created_at?: string | null
          currency?: Database["public"]["Enums"]["currency_type"]
          id?: string
          is_active?: boolean | null
          locked_balance?: number | null
          private_key_encrypted?: string | null
          updated_at?: string | null
          user_id?: string
          wallet_address?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wallets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_referral_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      currency_type: "BTC" | "ETH" | "USDT" | "KES"
      education_resource_type: "video" | "article" | "quiz" | "tutorial"
      notification_type:
        | "transaction"
        | "kyc"
        | "market_alert"
        | "education"
        | "referral"
      transaction_status:
        | "pending"
        | "processing"
        | "completed"
        | "failed"
        | "cancelled"
      transaction_type:
        | "deposit"
        | "withdraw"
        | "buy"
        | "sell"
        | "transfer"
        | "reward"
      user_kyc_status: "pending" | "in_progress" | "approved" | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      currency_type: ["BTC", "ETH", "USDT", "KES"],
      education_resource_type: ["video", "article", "quiz", "tutorial"],
      notification_type: [
        "transaction",
        "kyc",
        "market_alert",
        "education",
        "referral",
      ],
      transaction_status: [
        "pending",
        "processing",
        "completed",
        "failed",
        "cancelled",
      ],
      transaction_type: [
        "deposit",
        "withdraw",
        "buy",
        "sell",
        "transfer",
        "reward",
      ],
      user_kyc_status: ["pending", "in_progress", "approved", "rejected"],
    },
  },
} as const
