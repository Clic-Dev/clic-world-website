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
              CLIC WORLD UGANDA LTD PRIVACY POLICY
            </h1>
            <p className="text-gray-600">Last Updated: 26 October 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clic World Ltd ("Clic.World," "we," "us," "our") provides the CLIX Wallet, a custodial digital asset wallet service. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile applications, and services (collectively, the "Services").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please read this policy carefully. By using our Services, you consent to the practices described herein. <strong>IF YOU DO NOT AGREE WITH THIS POLICY, PLEASE DO NOT ACCESS OR USE OUR SERVICES.</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information that you provide directly to us, information automatically collected through your use of our Services, and information from third-party sources.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1. Information You Provide to Us</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Account Information:</strong> Name, email address, phone number, date of birth, and residential address.</li>
                <li><strong>Identity Verification Information (KYC):</strong> Government-issued identification number (e.g., Social Security Number, Tax ID), copies of government-issued photo ID (e.g., passport, driver's license), proof of address, and in some cases, a photograph or biometric data (e.g., facial recognition) for identity verification.</li>
                <li><strong>Financial Information:</strong> Bank account details, payment card information, and transaction history. For certain transactions, we may request information about the source of funds.</li>
                <li><strong>Communications:</strong> Records of your correspondence with us, including support requests and survey responses.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2. Information Collected Automatically</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, operating system and platform, and other technology on the devices you use to access our Services.</li>
                <li><strong>Usage Data:</strong> Information about how you use our Services, including transaction timestamps, clickstream data, and pages you viewed.</li>
                <li><strong>Device Information:</strong> Unique device identifiers, mobile network information, and device hardware model.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3. Information from Third Parties</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Identity Verification Services:</strong> Data from credit bureaus, identity verification partners, and sanctions screening services to comply with KYC and Anti-Money Laundering (AML) obligations.</li>
                <li><strong>Financial Institutions:</strong> Information from your bank to confirm account ownership and balance for transaction processing.</li>
                <li><strong>Other Virtual Asset Service Providers (VASPs):</strong> For transactions subject to the "Travel Rule" (e.g., exceeding $3,000 in the U.S.), we may receive information about the originator or beneficiary from other VASPs, including their name, address, and wallet address.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>To Provide and Maintain the Services:</strong> To create and manage your account, process transactions, and provide customer support.</li>
                <li><strong>To Comply with Legal Obligations (KYC/AML/CFT):</strong> To verify your identity, conduct sanctions screening, monitor for and report suspicious activity, and comply with all applicable laws and regulations, including the "Travel Rule" (31 CFR § 1010.410).</li>
                <li><strong>To Protect Our Services and Users:</strong> To detect, prevent, and address fraud, security breaches, and other potentially prohibited or illegal activities.</li>
                <li><strong>To Communicate with You:</strong> To send you technical notices, security alerts, support messages, and administrative communications.</li>
                <li><strong>To Improve Our Services:</strong> To analyse usage trends and improve the functionality and security of our Services.</li>
                <li><strong>For Legal and Regulatory Reasons:</strong> To enforce our terms of service and comply with court orders, subpoenas, and other legal processes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Legal Basis for Processing (For EEA/UK Users)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA) or United Kingdom, we process your personal data on the following legal bases:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Performance of a Contract:</strong> To fulfil our obligations under the Terms of Service with you.</li>
                <li><strong>Legal Obligation:</strong> To comply with our legal requirements for anti-money laundering and counter-terrorist financing.</li>
                <li><strong>Legitimate Interests:</strong> For our legitimate interests in preventing fraud, ensuring network and information security, and improving our Services.</li>
                <li><strong>Consent:</strong> In specific cases where we are required to obtain your consent, such as for certain marketing communications or the processing of special categories of data.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. How We Share Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>With Regulatory and Law Enforcement Authorities:</strong> As required by law, to comply with a legal obligation, or to respond to valid requests from public authorities.</li>
                <li><strong>With Other Virtual Asset Service Providers (VASPs):</strong> To comply with the "Travel Rule," we share and receive required originator and beneficiary information (name, address, wallet address) for qualifying transactions.</li>
                <li><strong>With Service Providers:</strong> We engage trusted third parties to perform functions on our behalf, such as cloud hosting, identity verification, customer support, and analytics. These parties are contractually bound to protect your data and use it only for the purposes we specify.</li>
                <li><strong>For Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred. We will notify you of such a change in ownership.</li>
                <li><strong>With Your Consent:</strong> We may share your information for any other purpose disclosed to you with your consent.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your personal information may be transferred to, stored, and processed in countries other than your country of residence, including the United States and other jurisdictions where our service providers operate. These countries may have data protection laws that differ from your home country.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When we transfer personal data from the EEA, UK, or Switzerland to a country not deemed to provide an adequate level of protection, we rely on approved transfer mechanisms, such as the Standard Contractual Clauses, to ensure your data is protected.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement robust administrative, technical, and physical security measures designed to protect your personal information. These include encryption, access controls, and secure facilities. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law (e.g., for regulatory reporting, tax, or financial auditing purposes). For example, we are required to retain KYC and transaction data for a minimum of five (5) years under AML regulations. Information recorded on a public blockchain is immutable and cannot be deleted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Access:</strong> The right to know what personal data we hold about you.</li>
                <li><strong>Correction:</strong> The right to have inaccurate personal data corrected.</li>
                <li><strong>Deletion:</strong> The right to request the deletion of your personal data, subject to legal limitations.</li>
                <li><strong>Portability:</strong> The right to receive a copy of your data in a structured, machine-readable format.</li>
                <li><strong>Objection:</strong> The right to object to certain processing activities, such as direct marketing.</li>
                <li><strong>Withdraw Consent:</strong> Where we rely on consent, the right to withdraw it at any time.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                To exercise these rights, please contact us at legal@clic.world. We will respond to your request in accordance with applicable law. Please note that we may need to retain certain information for record-keeping, legal, and regulatory purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this policy from time to time. The "Last Updated" date at the top will indicate when changes were made. If we make material changes, we will provide notice through our Services or via email prior to the change becoming effective.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, or to exercise your privacy rights, please contact our Data Protection Officer at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-900 font-semibold mb-1">Clic World Uganda Ltd</p>
                <p className="text-gray-700">Email: <a href="mailto:legal@clic.world" className="text-blue-600 hover:text-blue-800">legal@clic.world</a></p>
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
