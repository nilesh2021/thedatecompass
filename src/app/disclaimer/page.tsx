import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Disclaimer | TheDateCompass",
    description:
        "Read the disclaimer for TheDateCompass and understand our affiliate relationships and informational content policies.",
};

export default function DisclaimerPage() {
    return (

<>  

<Header />


        <main className="bg-white text-gray-800 min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="flex justify-end mb-8">

                </div>
                <h1 className="text-4xl font-bold mb-8">
                    Disclaimer
                </h1>

                <p className="text-gray-600 mb-6">
                    Last updated: January 2026
                </p>

                <section className="space-y-6 text-gray-700 leading-8">

                    <p>
                        The information provided on TheDateCompass is for general
                        informational and marketing purposes only.
                    </p>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Affiliate Disclosure
                        </h2>

                        <p>
                            This website contains affiliate links. We may receive
                            compensation when users click links, register, or interact
                            with promoted dating platforms and third-party services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            No Guarantees
                        </h2>

                        <p>
                            We do not guarantee dating success, relationships, matches,
                            or user experiences on any third-party platform promoted on
                            this website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Third-Party Responsibility
                        </h2>

                        <p>
                            All dating services, offers, and platforms linked from this
                            website are operated by third parties. We are not responsible
                            for their content, policies, billing, or user interactions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Content Accuracy
                        </h2>

                        <p>
                            While we strive to provide accurate and updated information,
                            we cannot guarantee the completeness, accuracy, or availability
                            of all content and offers at all times.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Adult Content Notice
                        </h2>

                        <p>
                            Some content and promoted services on this website may be
                            intended for adults only. Users must be at least 18 years old
                            to access this website and related third-party services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Contact
                        </h2>

                        <p>
                            If you have questions regarding this disclaimer, you may
                            contact us through our website contact page.
                        </p>
                    </div>

                </section>
            </div>
        </main>

        <Footer />  </>
    );
}