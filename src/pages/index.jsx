import { UseTodoContextProvider } from "@/utils/UseTodoContext";
import MainPage from "@/components/mainPage";

export default function Home() {
  return (
    <UseTodoContextProvider>
      <MainPage />
    </UseTodoContextProvider>
  );
}
