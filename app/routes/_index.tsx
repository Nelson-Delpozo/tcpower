import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { prisma } from "~/db.server"; // Assuming db.server.ts exports prisma client

export const meta: MetaFunction = () => {
  return [
    { title: "TC Power & Battery - Coming Soon!" },
    { name: "description", content: "Join the waitlist for The Colony's new hub for outdoor power equipment sales and repair!" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (typeof email !== "string" || email.length === 0 || !emailRegex.test(email)) {
    return json({ errors: { email: "Please enter a valid email address." } }, { status: 400 });
  }

  try {
    await prisma.waitlistEntry.create({
      data: { email },
    });
    return json({ success: true, message: "Thanks for signing up! We'll keep you posted on our grand opening and special offers." });
  } catch (e: any) {
    // Handle potential unique constraint violation (email already exists)
    if (e.code === "P2002" && e.meta?.target?.includes("email")) {
      return json({ errors: { email: "This email address is already on our waitlist." } }, { status: 400 });
    }
    // Generic error
    return json({ errors: { email: "Something went wrong. Please try again later." } }, { status: 500 });
  }
}

export default function Index() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      <img src="/landscaping-equipment-header.jpg.webp" alt="Outdoor Power Equipment" className="w-full max-w-4xl h-auto md:h-64 object-cover rounded-lg shadow-lg mb-8" />
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-2xl w-full text-center">
        
        <img src="/iStock-1023450122.jpg" alt="Gardening tools" className="w-32 h-32 mx-auto rounded-full shadow-md mb-6 object-cover" />

        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
          The Colony's New Hub for Outdoor Power Equipment is Coming Soon!
        </h1>
        
        <p className="text-gray-700 text-lg mb-4">
          TC Power & Battery is your new local expert for top-quality outdoor power equipment sales, 
          reliable small engine repair, and specialized battery-powered tool services. 
          From zero-turns and chainsaws to generators and trimmers, we've got you covered.
        </p>
        <p className="text-gray-700 text-lg mb-8">
          Serving homeowners, commercial landscapers, and municipal clients with modern equipment solutions and expert service. 
          Sign up to be the first to know about our grand opening!
        </p>

        {/* Optional Square Image 2 - Replace with actual image path */}
        {/* Example: <img src="/slide-4.jpg" alt="Battery powered tools" className="w-48 h-auto mx-auto rounded-lg shadow-md mb-8" /> */}

        <Form method="post" className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your email address"
            />
            {actionData && "errors" in actionData && actionData.errors?.email && (
              <p className="mt-2 text-sm text-red-600" id="email-error">
                {actionData.errors.email}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Join the Waitlist"}
            </button>
          </div>
        </Form>

        {actionData && "success" in actionData && actionData.success && (
          <p className="mt-6 text-lg text-green-700 font-semibold">
            {actionData.message}
          </p>
        )}
        <img src="/Commercial-Landscaping-Hero-1.avif" alt="Landscaping services" className="w-full max-w-xl h-auto md:h-48 object-cover rounded-lg shadow-lg mt-12 mx-auto" />
      </div>
      <footer className="mt-12 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} TC Power & Battery. All rights reserved.</p>
        <p>The Colony, TX</p>
      </footer>
    </div>
  );
}
