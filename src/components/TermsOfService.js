import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const TermsOfService = () => {
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
              Clic.World Terms of Service
            </h1>
            <p className="text-gray-600">Last Updated: 28 October 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
              PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY GOVERN YOUR USE OF THE CLIX WALLET APPLICATION AND SERVICES. THEY CONTAIN IMPORTANT INFORMATION ABOUT YOUR LEGAL RIGHTS, REMEDIES, AND OBLIGATIONS, INCLUDING A MANDATORY INDIVIDUAL ARBITRATION PROVISION AND A CLASS ACTION WAIVER IN SECTION 10.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The CLIX Wallet application, software, services, and related websites (collectively, the "Services") are provided by Clic World Uganda Limited ("Company," "we," "us," "our"). These Terms of Service (these "Terms") constitute a legally binding agreement between you ("you," "your") and the Company.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using our Services, you (i) acknowledge that you have read, understand, and agree to be bound by these Terms and our Privacy Policy (available at https://clic.world/legal/privacypolicy), which is incorporated by reference; and (ii) represent and warrant that you have the legal capacity and authority to enter into a binding agreement. If you are using the Services on behalf of a company or other entity, you represent and warrant that you have the authority to bind that entity.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE THE SERVICES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. The Services; Custodial Wallet</h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">a. Nature of Services.</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The CLIX Wallet is a custodial digital asset wallet. This means that the Company, or its designated third-party custodians, holds the private keys associated with your blockchain addresses and safeguards the digital assets in your wallet on your behalf. You are granting the Company the authority to control the digital assets linked to your Account for the purpose of securing your assets and facilitating transactions under these Terms.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">b. Control and Ownership.</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                While you retain legal ownership of the digital assets in your Account, your ability to transfer or engage in other transactions with those assets is dependent on the Company's operational and technical infrastructure. The Company safeguards the private keys and executes transactions upon your authorised instruction.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">c. No Fiduciary Duty.</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Company is not a broker, financial institution, or creditor. No communication or information provided to you by the Company is intended as, or shall be considered or construed as, financial advice, investment advice, or any other sort of advice. You are solely responsible for determining whether any investment, investment strategy, or transaction is appropriate for you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Accounts and Security</h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">a. Eligibility and Registration:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You must be at least 18 years old to use the Services. To use the Services, you must register for an account ("Account"). You represent and warrant that all information provided during registration is truthful and accurate.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">b. Identity Verification (KYC/AML):</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You acknowledge that as a custodial wallet service, we are required to verify your identity in accordance with applicable Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations. You agree to provide us with any information we reasonably request for verification purposes. We may restrict or terminate your Account if you fail to complete required verification.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">c. Account Security:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for maintaining the confidentiality of your Account login credentials (such as username and password) and for all activities that occur under your Account. You must immediately notify us at security@clic.world of any unauthorised use of your Account or any other security breach.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Access and License</h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">a. License Grant:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Subject to these Terms, Company grants you a limited, non-exclusive, non-transferable, non-sub-licensable, and revocable license to use the Services for your personal, non-commercial use.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">b. Restrictions:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You shall not: (i) use the Services for any illegal purpose or in violation of any local, state, national, or international law; (ii) harass, abuse, or harm another person; (iii) interfere with or disrupt the Services or servers or networks connected to the Services; (iv) attempt to reverse engineer, decompile, or disassemble any aspect of the Services; or (v) use any robot, spider, crawler, scraper, or other automated means to access the Services for any purpose without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Responsibilities; Risks of Digital Assets</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You understand and accept the following inherent risks:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li><strong>Custodial Risk:</strong> Your assets are held by a third party (the Company). While we implement security measures, there is a risk of loss due to operational failure, cybersecurity breaches, or insolvency.</li>
                <li><strong>Volatility:</strong> The value of digital assets can change rapidly and significantly, and you may lose all or a substantial amount of your purchase price.</li>
                <li><strong>Regulatory Uncertainty:</strong> The regulatory framework for digital assets is evolving and may adversely affect the Services, including our ability to provide them in certain jurisdictions.</li>
                <li><strong>Technical Risks:</strong> Digital assets are subject to cybersecurity risks, including hacking and unauthorised access. Transactions, once executed on the blockchain, are irreversible.</li>
                <li><strong>Taxes:</strong> You are solely responsible for determining what, if any, taxes apply to your transactions, and it is your responsibility to report and remit the correct tax to the appropriate authority.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Links and Content</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Services may contain links to third-party websites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of any such content, goods, or services available on or through any such third-party sites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disclaimers</h2>
              <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. THE COMPANY EXPLICITLY DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. THE COMPANY DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED. THE COMPANY DOES NOT WARRANT THE SECURITY, ACCURACY, OR RELIABILITY OF ANY DIGITAL ASSETS, DATA, OR INFORMATION PROCESSED VIA THE SERVICES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY TO USE, THE SERVICES. TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICES SHALL NOT EXCEED THE AMOUNT OF ONE HUNDRED U.S. DOLLARS ($100.00) OR THE VALUE OF THE DIGITAL ASSETS HELD IN YOUR ACCOUNT AT THE TIME OF THE INCIDENT GIVING RISE TO THE CLAIM, WHICHEVER IS LESS. THE FOREGOING LIMITATIONS WILL APPLY EVEN IF THE ABOVE STATED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Term and Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Subject to this Section, these Terms will remain in full force and effect while you use the Services. We may suspend or terminate your rights to use the Services (including your Account) at any time for any reason at our sole discretion, including for any use of the Services in violation of these Terms or our failure to verify your identity. Upon termination of your rights under these Terms, your Account and right to access and use the Services will terminate immediately. You understand that any termination of your Account may involve deletion of your information and access to your digital assets. Company will not have any liability whatsoever to you for any termination of your rights under these Terms. Even after your rights under these Terms are terminated, the following provisions of these Terms will remain in effect: Sections 5, 7, 8, and 10-13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Dispute Resolution; Arbitration</h2>
              <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">a. Informal Resolution:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most concerns can be resolved quickly by contacting our support team at info@clic.world. Before filing a claim against the Company, you agree to attempt to resolve the dispute informally by sending us a written notice of your claim ("Notice") at legal@clic.world.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">b. Agreement to Arbitrate:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If the dispute is not resolved within 30 days after the Notice is received, you and the Company agree to resolve any dispute arising out of or relating to these Terms or our Services through final and binding arbitration, rather than in court, except that (i) you may assert claims in small claims court if your claims qualify; and (ii) either party may bring a lawsuit solely for injunctive relief to stop unauthorised use or abuse of the Services, or intellectual property infringement.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">c. Arbitration Rules:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The arbitration will be administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules, or another established ADR provider mutually agreed upon. The arbitrator's award shall be final and binding.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">d. NO CLASS ACTIONS:</h3>
              <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                YOU MAY ONLY RESOLVE DISPUTES WITH THE COMPANY ON AN INDIVIDUAL BASIS AND MAY NOT BRING A CLAIM AS A PLAINTIFF OR A CLASS MEMBER IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms and any action related thereto shall be governed by and construed in accordance with the laws of the Republic of Uganda, without regard to its conflict of law provisions. The exclusive jurisdiction for any claims not subject to arbitration shall be the courts of Republic of Uganda.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may modify these Terms at any time. If we make material changes, we will provide notice through our Services or by other means, which may include posting a revised version of these Terms and updating the "Last Updated" date. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Miscellaneous</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms constitute the entire agreement between you and the Company regarding the Services and supersede all prior agreements. If any part of these Terms is held invalid or unenforceable, that part will be construed to reflect the parties' original intent, and the remaining portions will remain in full force and effect. Our failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-900 font-semibold mb-1">Clic World Uganda Limited</p>
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

export default TermsOfService;
