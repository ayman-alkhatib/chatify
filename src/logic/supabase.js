import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ocfqhjpydfxegxjnhlnl.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jZnFoanB5ZGZ4ZWd4am5obG5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNTYyMzgsImV4cCI6MjA1MTgzMjIzOH0.qaArxCnIzdPEvWJJI8oeZaYXE1GFz9bn_jNkUGAAxJ4"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)