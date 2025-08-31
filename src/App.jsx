import React, { useState } from "react";

// A separate component for the user interface
const ImageGeneratorUI = ({
  prompt,
  setPrompt,
  isLoading,
  error,
  imageUrl,
  onGenerate,
}) => (
  <div className="w-full max-w-4xl">
    {/* Glassmorphism container with advanced styling */}
    <div className="relative bg-gradient-to-br from-slate-900/90 via-purple-900/20 to-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>

      {/* Floating orbs for visual effect */}
      <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-6 left-6 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-500/20 rounded-full blur-xl"></div>

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            AI Image Generator
          </h1>
          <p className="text-slate-300 text-lg font-medium">
            Transform your imagination into stunning visuals with AI
          </p>
        </div>

        {/* Input Section */}
        <div className="mb-8">
          <label className="block text-slate-200 text-sm font-semibold mb-3">
            Describe your vision
          </label>
          <div className="relative">
            <textarea
              className="w-full p-6 text-slate-100 bg-slate-800/50 backdrop-blur-sm rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50 placeholder-slate-400 text-lg leading-relaxed"
              rows="4"
              placeholder="A majestic dragon soaring through aurora-lit clouds above a mystical mountain range..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="absolute bottom-4 right-4 text-slate-500 text-sm">
              {prompt.length}/500
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={onGenerate}
          disabled={isLoading || !prompt.trim()}
          className="group relative w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-lg rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-cyan-500/25 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex items-center justify-center">
            {isLoading ? (
              <>
                <div className="flex items-center">
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  <span>Creating magic...</span>
                </div>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Generate Image
              </>
            )}
          </div>
        </button>

        {/* Results Section */}
        <div className="mt-8">
          {error && (
            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm border border-red-500/30 text-red-100 p-4 rounded-2xl mb-6 flex items-center">
              <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>{error}</span>
            </div>
          )}

          {imageUrl && (
            <div className="group">
              <h3 className="text-slate-200 text-lg font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.5 2.5L19 4"></path>
                </svg>
                Generated Image
              </h3>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 group-hover:border-slate-600/50 transition-colors duration-300">
                {/* Image container with aspect ratio preservation */}
                <div className="relative bg-slate-800/30 backdrop-blur-sm">
                  <img
                    src={imageUrl}
                    alt="AI Generated artwork"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ maxHeight: '70vh', objectFit: 'contain' }}
                  />

                  {/* Overlay with download button */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={imageUrl}
                        download="ai-generated-image.png"
                        className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        Download
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <p className="text-white text-sm font-medium truncate">
                    "{prompt}"
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Loading state with enhanced animation */}
          {isLoading && !imageUrl && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-slate-700 rounded-full"></div>
                <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-cyan-500 border-r-purple-500 rounded-full animate-spin"></div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-slate-200 text-lg font-medium mb-2">
                  AI is crafting your image...
                </p>
                <p className="text-slate-400 text-sm">
                  This may take a few moments
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

// Main App component
const App = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const hfToken = import.meta.env.VITE_HF_TOKEN;

  const generateImage = async () => {
    setImageUrl("");
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://router.huggingface.co/fal-ai/fal-ai/qwen-image",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${hfToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: prompt }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      // Handle the response format you specified
      if (data.images && data.images[0]) {
        // If the image is a URL
        if (typeof data.images[0] === 'string') {
          setImageUrl(data.images[0]);
        }
        // If the image is in a different format (base64, blob, etc.)
        else if (data.images[0].url) {
          setImageUrl(data.images[0].url);
        }
        else {
          throw new Error("Unexpected image format in response");
        }
      } else {
        throw new Error("No image found in API response");
      }
    } catch (e) {
      console.error("Error generating image:", e);
      setError(`Failed to generate image: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 flex flex-col items-center justify-center p-4 font-sans">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <ImageGeneratorUI
          prompt={prompt}
          setPrompt={setPrompt}
          isLoading={isLoading}
          error={error}
          imageUrl={imageUrl}
          onGenerate={generateImage}
        />
      </div>
    </div>
  );
};

export default App;