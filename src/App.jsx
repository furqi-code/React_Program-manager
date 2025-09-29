import { Sidebar } from "./components/Sidebar";
import { ProjectContextProvider } from "./store/projectContext.js";

export function App() {
  return (
    <ProjectContextProvider>
      <Sidebar />
    </ProjectContextProvider>
  );
}
