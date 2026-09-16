import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import CasPratique from "./pages/CasPratique";
import CasPratiqueDetail from "./pages/CasPratiqueDetail";
import Concours from "./pages/Concours";
import Flashcards from "./pages/Flashcards";
import Glossaire from "./pages/Glossaire";
import JeuAssociation from "./pages/JeuAssociation";
import Methodologie from "./pages/Methodologie";
import Progression from "./pages/Progression";
import Sprint from "./pages/Sprint";
import MethodeCasPratique from "./pages/MethodeCasPratique";
import MethodeQcm from "./pages/MethodeQcm";
import Quiz from "./pages/Quiz";
import Articles from "./pages/Articles";
import Liens from "./pages/Liens";
import QuizCategories from "./pages/QuizCategories";
import Annales from "./pages/Annales";
import AnnaleDetail from "./pages/AnnaleDetail";
import Entrainement from "./pages/Entrainement";
import CoursDetail from "./pages/CoursDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/concours" element={<Concours />} />
          <Route path="/glossaire" element={<Glossaire />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/progression" element={<Progression />} />
          <Route path="/jeu-association" element={<JeuAssociation />} />
          <Route path="/quiz" element={<QuizCategories />} />
          <Route path="/quiz/:categorie" element={<Quiz />} />
          <Route path="/sprint" element={<Sprint />} />
          <Route path="/methodologie" element={<Methodologie />} />
          <Route path="/methodologie/cas-pratique" element={<MethodeCasPratique />} />
          <Route path="/methodologie/qcm" element={<MethodeQcm />} />
          <Route path="/cas-pratique" element={<CasPratique />} />
          <Route path="/cas-pratique/:id" element={<CasPratiqueDetail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/liens" element={<Liens />} />
          <Route path="/annales" element={<Annales />} />
          <Route path="/annales/:annee" element={<AnnaleDetail />} />
          <Route path="/entrainement" element={<Entrainement />} />
          <Route path="/entrainement/:sujet" element={<CoursDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
