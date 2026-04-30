import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
      <Toaster />
    </QueryClientProvider>
  );
}
