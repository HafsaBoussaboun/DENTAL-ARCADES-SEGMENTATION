/**
 * Composant principal de la page d'accueil.
 * Ce composant gère l'interface utilisateur et les interactions liées au téléchargement de fichiers
 * et à la prédiction.
 */
import React, { useState } from "react";
import axios from 'axios';
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Vis from "./3D";

export const Home = () => {
  // États pour suivre différentes informations liées à la prédiction et au téléchargement
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictionSuccess, setPredictionSuccess] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [predictionCompleted, setPredictionCompleted] = useState(false);
  const [predictionMessage, setPredictionMessage] = useState("");
  const [predictionFileURL, setPredictionFileURL] = useState("");
  const [showVis, setShowVis] = useState(false);
  const [predictionInProgress, setPredictionInProgress] = useState(false);

  // Gère le changement de fichier sélectionné
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedFileName(file.name);
  };

  // Gère le téléchargement et la prédiction du fichier
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('meshFile', selectedFile);

    try {
      // Marque le début de la prédiction
      setPredictionInProgress(true);

      // Envoie une requête POST avec le fichier au serveur
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        responseType: 'blob',
      });

      // Crée un blob à partir de la réponse pour le téléchargement
      const blob = new Blob([response.data], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob);

      // Met à jour l'état pour indiquer que la prédiction a réussi
      setPredictionSuccess(true);
      setPredictionCompleted(true);
      setPredictionMessage("Prédiction réussie !");
      setPredictionFileURL(url);

    } catch (error) {
      // Gère les erreurs et les affiche dans la console
      console.error('Erreur lors du téléchargement du fichier :', error);
    } finally {
      // Marque la fin de la prédiction, que ce soit un succès ou un échec
      setPredictionInProgress(false);
    }
  };

  // Gère le téléchargement du fichier prédit
  const handleDownload = () => {
    if (predictionFileURL) {
      const link = document.createElement('a');
      link.href = predictionFileURL;
      link.download = 'output_file.vtp';
      link.click();
    } else {
      console.error('Aucune URL de fichier prédit disponible.');
    }
  };
  return (
    <div>
      <section id="banner" className="banner">
        <div className="bg-color">
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="banner-info">
                <div className="banner-logo text-center">
                  {/* Ajoutez ici une image de logo */}
                </div>
                <div className="banner-text text-center">
                  <h1 className="white">Dental Arcades Segmentation</h1>
                  <p>Embrace the transformation and immerse yourself in the next generation of dental wellness with DentalArcadeSeg.</p>
                  <input
                    type="file"
                    id="uploadInput"
                    accept=".vtp ,.obj"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <div className="file-input-container">
                    {/* Affiche le bouton "Upload Object" si certaines conditions ne sont pas remplies */}
                    {!predictionInProgress && !predictionCompleted && !predictionSuccess && (
                      <label
                        htmlFor="uploadInput"
                        style={{
                          cursor: "pointer",
                          display: "inline-block",
                          padding: "10px 20px",
                          backgroundColor: "#3498db",
                          color: "#FFFFFF",
                          borderRadius: "5px",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          textAlign: "center",
                          fontSize: "16px",
                        }}
                      >
                        Upload Object
                      </label>
                    )}
                    {/* Affiche le nom du fichier sélectionné si la prédiction n'a pas réussi */}
                    {selectedFileName && !predictionSuccess ? (
                      <p className="selected-file">Selected File: {selectedFileName}</p>
                    ) : null}
                    {/* Affiche le bouton "Predict" si la prédiction n'est pas en cours */}
                    {!predictionInProgress && !predictionCompleted && !predictionSuccess && (
                      <button
                        type="button"
                        onClick={handleUpload}
                        style={{
                          backgroundColor: "#19608C",
                          marginLeft: "30px",
                          color: "#fff",
                          padding: "10px 20px",
                          border: "none",
                          borderRadius: "5px",
                          fontSize: "16px",
                          cursor: "pointer",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          transition: "background-color 0.3s ease-in-out",
                        }}
                      >
                        Predict
                      </button>
                    )}
                    {/* Affiche un indicateur de progression pendant la prédiction */}
                    {predictionInProgress ? (
                      <div>
                        <span className="loader" style={{ display: "inline-block", marginLeft: "10px" }}> </span>
                        <h4 style={{ color: "white" }}>predicting...</h4>
                      </div>
                    ) : null}
                    {/* Affiche le message de prédiction réussie s'il y a succès */}
                    {predictionCompleted && predictionSuccess ? (
                      <h4 style={{ color: "white" }}>{predictionMessage}</h4>
                    ) : null}
                  </div>
                  {/* Affiche le message sur les fichiers pris en charge */}
                  {!predictionInProgress && !predictionCompleted && !predictionSuccess && (
                    <div>
                      <h4 style={{ color: "white" }}> Supported Files :</h4>
                      <h4 style={{ color: "white" }}>(.vtp)</h4>
                    </div>
                  )}
                  {/* Affiche les boutons de téléchargement et de visualisation si la prédiction est réussie */}
                  {predictionCompleted && predictionSuccess && predictionFileURL ? (
                    <div>
                      <button style={{
                        backgroundColor: "#5DADE2",
                        color: "#fff",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "16px",
                        cursor: "pointer",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        transition: "background-color 0.3s ease-in-out",
                        marginRight: "10px",
                      }} onClick={() => setShowVis(!showVis)}>Visualise VTP File</button>
                      <button style={{
                        backgroundColor: "#5DADE2",
                        color: "#fff",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "16px",
                        cursor: "pointer",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        transition: "background-color 0.3s ease-in-out",
                      }} onClick={handleDownload}>Download the VTP file</button>
                    </div>
                  ) : null}
                  {/* Affiche le composant de visualisation s'il est activé */}
                  {showVis ? (
                    <Vis predictionFileURL={predictionFileURL} />
                  ) : console.log("something was wrong")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Contact />
      <Footer />

      <script src="js/jquery.min.js"></script>
      <script src="js/jquery.easing.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/custom.js"></script>
      <script src="contactform/contactform.js"></script>
    </div>
  );
}
export default Home;
