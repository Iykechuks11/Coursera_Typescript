import { LoyaltyUser } from "./enum";

// Interface
export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date?: string;
}

export interface Review2 {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
    description: string;
}