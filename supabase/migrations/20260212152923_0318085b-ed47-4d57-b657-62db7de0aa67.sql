
-- Add offer fields to products table
ALTER TABLE public.products ADD COLUMN is_offer boolean NOT NULL DEFAULT false;
ALTER TABLE public.products ADD COLUMN offer_badge text;
