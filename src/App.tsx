import GoogleTagManager from "./components/GoogleAnalytics/GoogleTagManager";
import { DataProvider } from "./context/DataContext";
import { useAnalytics } from "./hook/useAnalytics";
import useHandleRoutes from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const { routes } = useHandleRoutes();
  useAnalytics();
  return (
    <>
      <GoogleTagManager />

      <QueryClientProvider client={queryClient}>
        <DataProvider>{routes}</DataProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
