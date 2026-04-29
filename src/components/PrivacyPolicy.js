import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Navigation Header */}
      <nav className="bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src={`${process.env.PUBLIC_URL}/clic-logo.png`} 
                alt="Clic.World Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-gray-900 font-semibold">← Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="mb-8 border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Clic.World Privacy Policy
            </h1>
            <p className="text-gray-600">Effective date: 28 April 2026</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Matters</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clic.World ("Clic.World", "we", "us", "our") is committed to protecting your privacy. This policy explains what information we collect from you through our mobile app ("Clic.World" or "App"), how we use it, and the choices you have.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Images You Upload</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you use the image-sharing feature within the App, the images you deliberately select and upload are transmitted to our servers to enable that feature. This upload happens only when you actively initiate it (e.g., by posting a photo to your feed or profile). The images are used solely to provide the functionality you expect from the App.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Account &amp; Profile Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you register an account, we collect your contact information (such as email address), username, and profile photo if you choose to add one. This information is used to create and manage your account and to display your profile within the App.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Content You Provide</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect the content you create, send, and share through the App, including any text, comments, or feedback you submit in public or interactive areas of the App.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Usage &amp; Device Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect basic information about how you interact with the App (clickstream data, feature usage) and general device information (device type, operating system) to improve the App's performance and user experience.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Call Log Permission (Clix Wallet only)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                On certain apps (e.g., Clix Wallet), we request READ_CALL_LOG permission solely to verify your phone number during account creation. We do not access your call log after verification.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Provide, maintain, and improve the App's core features, including image sharing.</li>
                <li>Create and manage your user account.</li>
                <li>Respond to your questions and support requests.</li>
                <li>Monitor app performance and diagnose technical issues.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Share Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Service providers:</strong> We may share data with third-party vendors who help us host the App, store data, or provide analytics - but only as necessary to operate the App.</li>
                <li><strong>Legal compliance:</strong> We may disclose information if required by law or to protect our legal rights.</li>
                <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Choices &amp; Controls</h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Consent for Image Uploads</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before any image is uploaded from your device, the App will display a clear in-app disclosure explaining how your images will be collected and used. You must affirmatively tap a button to consent, and you may decline at any time. If you decline, no image upload will occur.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Account Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may review and update your account information at any time through the App's settings.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Data Deletion</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you wish to delete your account and all associated data, please contact us at [your support email].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use industry-standard encryption (HTTPS) when transmitting your data. Your information is stored on secure servers with access restricted to authorized personnel only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The App is not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries outside your residence. We will take appropriate safeguards to protect your information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this policy from time to time. Any material changes will be communicated through the App or via email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this policy or your data, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">Email: <a href="mailto:andre@clic.world" className="text-blue-600 hover:text-blue-800">andre@clic.world</a></p>
                <p className="text-gray-700">Address: Clic World (U) Ltd., Kampala, Uganda</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
