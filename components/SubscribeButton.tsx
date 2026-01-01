"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripPromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function SubscribeButton() {
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ priceId: "pro_monthly" }),
            });

            const { url, error } = await res.json();
            if (error) throw new Error(error);
            if (url) {
                window.location.href = url;
            } else {
                throw new Error("No checkout URL returned");
            }
        } catch (err) {
            console.error(err);
            alert(`Checkout failed: ${(err as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleSubscribe}
            disabled={loading}
            className={`btn btn-primary`}
            style={{ width: "100%" }}
        >
            {loading ? "Redirecting..." : "Subscribe Now"}
        </button>
    );
}
