import { createClient } from '@supabase/supabase-js';

const URL = "https://kzcmnfgluhvontlsshbz.supabase.co";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6Y21uZmdsdWh2b250bHNzaGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzNDQ0OTcsImV4cCI6MTk5NjkyMDQ5N30.BGGZXDQuho4cue-xZ8QXeNmhK7e5FWNNKtkoPQXwlk4";

export const supabase = createClient(URL, API_KEY);
