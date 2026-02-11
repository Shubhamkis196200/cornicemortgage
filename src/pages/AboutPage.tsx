import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO title="About Us" description="Learn about CorniceMortgage and our mission to provide free, professional mortgage tools." path="/about" />
      <Breadcrumbs items={[{ label: 'About' }]} />
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About CorniceMortgage</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-6">CorniceMortgage provides free, professional-grade mortgage calculators and financial tools to help you make informed home financing decisions.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">We believe everyone deserves access to high-quality financial tools without paywalls or sign-up requirements. Our mission is to empower homebuyers and homeowners with the information and calculators they need to make smart mortgage decisions.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Offer</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
          <li>50+ interactive mortgage calculators covering every aspect of home financing</li>
          <li>Comprehensive guides written by mortgage and real estate professionals</li>
          <li>Real-time calculations with no ads or interruptions</li>
          <li>Mobile-friendly tools that work on any device</li>
          <li>Completely free with no registration required</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Commitment</h2>
        <p className="text-gray-600 mb-4">All our calculators use industry-standard formulas and are regularly updated to reflect current lending practices. While we provide informational tools, we always recommend consulting with qualified mortgage professionals for personalized advice.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclaimer</h2>
        <p className="text-gray-600 mb-4">The tools and information on CorniceMortgage are provided for educational and informational purposes only. They should not be considered financial, legal, or tax advice. Always consult with qualified professionals before making financial decisions. Actual loan terms, rates, and costs will vary based on your specific situation and lender requirements.</p>
      </div>
    </div>
  );
}
