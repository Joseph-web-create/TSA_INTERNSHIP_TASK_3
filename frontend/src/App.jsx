import { Toaster } from "sonner";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import AuthProvider from "./store/AuthProvider";

function App() {
  return (
    <>
      <Toaster position="top-center" expand={true} richColors />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
