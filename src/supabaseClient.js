import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jcgaeiqzqsivdtwpgqcf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjZ2FlaXF6cXNpdmR0d3BncWNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NDQ3MjgsImV4cCI6MjA5NjUyMDcyOH0.3CtjfOc9Q7i3Y3OtWqAXQzDnXR6d0F366kDm8DHk0Sg';

export const supabase = createClient(supabaseUrl, supabaseKey);
