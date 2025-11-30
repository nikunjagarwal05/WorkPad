import React from "react";
import { useNavigate } from "react-router-dom";
import { MdNotes, MdSearch, MdEdit, MdLabel, MdSecurity } from "react-icons/md";
import bgImg from "../../assets/images/background.png";

const Front = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  const features = [
    {
      icon: <MdNotes className="text-4xl" />,
      title: "Create & Organize Notes",
      description: "Take notes quickly and organize them with tags and categories for easy access."
    },
    {
      icon: <MdSearch className="text-4xl" />,
      title: "Smart Search",
      description: "Find your notes instantly with our powerful search functionality that searches through all your content."
    },
    {
      icon: <MdEdit className="text-4xl" />,
      title: "Edit Anytime",
      description: "Update and modify your notes whenever you need to. Your thoughts evolve, and so can your notes."
    },
    {
      icon: <MdLabel className="text-4xl" />,
      title: "Tag System",
      description: "Organize your notes with custom tags to keep everything categorized and easy to find."
    },
    {
      icon: <MdSecurity className="text-4xl" />,
      title: "Secure & Private",
      description: "Your notes are securely stored and accessible only by you. Your privacy is our priority."
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#FAF7F2] dark:bg-[#1A1A1A] transition-colors">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3A3A3A] dark:text-[#E5E5E5] mb-4 sm:mb-6 leading-tight">
              Welcome to <span className="text-[#C97D60]">WorkPad</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-[#3A3A3A] dark:text-[#E5E5E5] mb-3 sm:mb-4 font-medium">
              The go-to app to take, maintain and change notes on the go.
            </p>
            
            <p className="text-base sm:text-lg text-[#8B9A8B] dark:text-[#B0B0B0] mb-8 sm:mb-12 max-w-2xl mx-auto">
              Capture your thoughts, organize your ideas, and never forget important information. 
              WorkPad makes note-taking simple, intuitive, and powerful.
            </p>

            {/* Get Started Button */}
            <button
              onClick={handleGetStarted}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#C97D60] text-white text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:bg-[#B86A4F] transform hover:scale-105 transition-all duration-200 mb-12 sm:mb-16"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#3A3A3A] dark:text-[#E5E5E5] mb-3 sm:mb-4">
              Why Choose WorkPad?
            </h2>
            <p className="text-center text-[#8B9A8B] dark:text-[#B0B0B0] mb-8 sm:mb-12 text-base sm:text-lg">
              Everything you need to manage your notes effectively
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#2A2A2A] backdrop-blur-sm rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5DED5] dark:border-[#404040] hover:border-[#C97D60] transform hover:-translate-y-2"
                >
                  <div className="text-[#C97D60] mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#3A3A3A] dark:text-[#E5E5E5] mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-[#8B9A8B] dark:text-[#B0B0B0] text-sm sm:text-base text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto bg-white dark:bg-[#2A2A2A] backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E5DED5] dark:border-[#404040]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3A3A3A] dark:text-[#E5E5E5] mb-5 sm:mb-6 text-center">
              How It Works
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#C97D60] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-base sm:text-lg text-[#3A3A3A] dark:text-[#E5E5E5]">Sign Up or Log In</h3>
                  <p className="text-sm sm:text-base text-[#8B9A8B] dark:text-[#B0B0B0]">Create your account or sign in to access your personal note-taking workspace.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#C97D60] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-base sm:text-lg text-[#3A3A3A] dark:text-[#E5E5E5]">Start Taking Notes</h3>
                  <p className="text-sm sm:text-base text-[#8B9A8B] dark:text-[#B0B0B0]">Create your first note with our intuitive editor. Add titles, content, and tags to organize your thoughts.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#C97D60] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-base sm:text-lg text-[#3A3A3A] dark:text-[#E5E5E5]">Organize & Search</h3>
                  <p className="text-sm sm:text-base text-[#8B9A8B] dark:text-[#B0B0B0]">Use tags and our powerful search feature to find any note instantly, no matter how many you have.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#C97D60] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-base sm:text-lg text-[#3A3A3A] dark:text-[#E5E5E5]">Edit & Update</h3>
                  <p className="text-sm sm:text-base text-[#8B9A8B] dark:text-[#B0B0B0]">Modify your notes anytime. Your ideas evolve, and WorkPad makes it easy to keep your notes up to date.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3A3A3A] dark:text-[#E5E5E5] mb-3 sm:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg text-[#8B9A8B] dark:text-[#B0B0B0] mb-6 sm:mb-8">
              Join thousands of users who are already organizing their thoughts with WorkPad.
            </p>
            <button
              onClick={handleGetStarted}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-[#C97D60] text-white text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:bg-[#B86A4F] transform hover:scale-105 transition-all duration-200"
            >
              Get Started Now
            </button>
            <p className="text-sm text-[#8B9A8B] dark:text-[#B0B0B0] mt-4 sm:mt-6">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-[#C97D60] underline hover:text-[#B86A4F] font-medium"
              >
                Log in here
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#E5DED5] dark:border-[#404040] bg-white/50 dark:bg-[#2A2A2A]/50 backdrop-blur-sm py-4 sm:py-6">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <p className="text-sm sm:text-base text-[#8B9A8B] dark:text-[#B0B0B0]">
              © 2024 WorkPad. Organize thoughts. Capture ideas. Remember everything.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
