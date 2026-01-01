# ProLearner

**ProLearner** is a premium SaaS platform designed for delivering high-quality coding tutorials. It features a modern, dark-themed UI, robust authentication-ready architecture, and seamless payment integration using Stripe.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-stable-green.svg)

## 🚀 Features

- **Premium Design System**: Built with modern CSS variables (HSL) for a sleek, dark-mode aesthetic.
- **Stripe Integration**: Full implementation of Stripe Checkout Sessions for subscription billing.
- **Database Layer**: SQLite database managed via Prisma ORM for User and Subscription data.
- **Type-Safe**: Built entirely with TypeScript and Next.js 16 (App Router).

## 🏗️ Architecture

The application follows a standard **Next.js App Router** architecture:

- **Frontend**: React Server Components (RSC) for performance, with Client Components for interactivity (e.g., Checkout Button).
- **Backend/API**: Next.js API Routes (`app/api/checkout`) handle secure server-side logic like creating Stripe sessions.
- **Database**: 
    - **SQLite**: A lightweight, file-based database (`dev.db`).
    - **Prisma**: Type-safe ORM to interact with the database.
- **Payments**: 
    - **Stripe Hosted Checkout**: Secure, PCI-compliant payment page hosted by Stripe.
    - **Webhooks**: (Architecture prepared) For listening to `invoice.payment_succeeded` events.

### Workflow
1.  **Landing Page**: Users visit the homepage to see value proposition and pricing tiers.
2.  **Checkout Initialization**: Clicking "Subscribe" calls the `/api/checkout` endpoint.
3.  **Payment Processing**: The server creates a Stripe Session and returns a secure URL.
4.  **Redirection**: The client redirects the user to the Stripe Hosted Checkout page.
5.  **Success**: Upon payment, the user is redirected back to the dashboard with active access.

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation

1.  **Clone/Open the repository**:
    ```bash
    cd prolearner
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Configuration**:
    Create a `.env` file in the root directory (if not already present) with the following keys:
    ```env
    # Stripe Keys (From Stripe Dashboard > Developers > API keys)
    STRIPE_SECRET_KEY=sk_test_...
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

    # Database
    DATABASE_URL="file:./dev.db"
    ```

4.  **Database Setup**:
    Initialize the SQLite database and push the schema:
    ```bash
    npx prisma db push
    ```

### Running the App

Start the development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```
prolearner/
├── app/
│   ├── api/            # Backend API routes (Checkout)
│   ├── globals.css     # Global styles & Design Tokens
│   ├── layout.tsx      # Root layout & Fonts
│   └── page.tsx        # Landing Page
├── components/         # Reusable UI components
│   └── SubscribeButton.tsx # Client-side Stripe button
├── lib/
│   └── stripe.ts       # Shared Stripe client instance
├── prisma/
│   ├── schema.prisma   # Database Models (User, Subscription)
│   └── dev.db          # SQLite Database file
└── public/             # Static assets
```

## 📜 Database Schema

The key models defined in `prisma/schema.prisma`:

- **User**: Represents a registered customer.
- **Subscription**: Tracks the Stripe subscription status (`active`, `canceled`) and period.

## 🤝 Contributing

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## Support

For help and support:

- **Issues** — Report bugs and request features via [GitHub Issues](https://github.com/nidhaahmed/ProLearner_Stripe/issues)
- **Documentation** — Check the [project documentation](./docs) for detailed guides
- **Questions** — Open a discussion for general questions and feedback

## License

This project is licensed under the ISC License — see the LICENSE file for details.

## Author

**Nidha Ahmed Mohammad**

- AI & Data Science Engineer
- Workflow Automation & MERN Stack Specialist
- Backend Engineering & System Design
