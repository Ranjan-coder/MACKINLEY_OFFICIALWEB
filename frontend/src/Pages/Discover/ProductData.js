import { createContext, useState } from 'react';
import hrconnectpro from '../../Assets/hrconnectpro.jpg';
import connectera from '../../Assets/connectera.jpg';
import mediai from '../../Assets/mediAI.jpg';
import globalGuardian from '../../Assets/globalguardian.png';

export const bucket = createContext();

export default function ProductData(props) {
    const [data, setData] = useState([
        {
            id: 1,
            cat: 'HRConnectPro',
            title: "HRConnect Pro : Elevating HR Management to New Heights",
            intro: "Introducing HRConnect Pro, your comprehensive solution for transforming HR management. Designed with cutting-edge technology, our platform streamlines and optimizes HR processes, making them more efficient and effective than ever before.",
            benefits: [
                {
                    key: "Unified Dashboard",
                    desc: "Simplify your HR tasks with our all-in-one dashboard. HRConnect Pro centralizes all HR activities, providing an intuitive interface for easier decision-making and task management."
                },
                {
                    key: "AI-Enhanced Candidate Engagement",
                    desc: "Leverage advanced AI to improve candidate experiences. Our intelligent chatbots manage inquiries, schedule interviews, and provide real-time feedback, ensuring a seamless and personalized engagement for every applicant."
                },
                {
                    key: "Customized Pre-Hire Assessments",
                    desc: "Ensure you hire the right talent with tailored assessments that evaluate specific skills needed for various roles. Our platform supports a range of tests, including theoretical, coding, attitude, and communication assessments, guaranteeing precise candidate evaluation."
                },
                {
                    key: "Comprehensive Talent Analytics:",
                    desc: "Empower your HR team with actionable insights. HRConnect Pro delivers real-time analytics on recruitment trends, applicant behavior, and training effectiveness, enabling data-driven decision-making."
                },
                {
                    key: "Mobile-Optimized Experience",
                    desc: "Capture top talent with our mobile-friendly platform. HRConnect Pro offers a smooth and efficient application process for candidates on the go, broadening your reach and accessibility."
                },
                {
                    key: "Specialized in HRTech and BFSI Domains",
                    desc: "HRConnect Pro is expertly designed for the HRTech and BFSI (Banking, Financial Services, and Insurance) sectors. Our deep industry knowledge ensures tailored solutions that address the unique challenges and needs of these domains."
                },
            ],
            features: [
                {
                    key: "Global Candidate Database",
                    feature: "Access a vast pool of both national and international candidates to find the best talent from around the world.",
                },
                {
                    key: "Work-from-Home Adaptability",
                    feature: "Perfect for the modern remote work environment, our platform supports remote hiring and management seamlessly.",
                },
                {
                    key: "Cost and Time Efficiency",
                    feature: "Significantly reduce recruitment costs and time, enhancing overall productivity.",
                },
                {
                    key: "Enhanced Candidate Engagement",
                    feature: "Keep candidates engaged with personalized communication, even for those on hold or not selected.",
                },
                {
                    key: "Dynamic and User-Friendly Assessments",
                    feature: "Provide a seamless experience with customizable and interactive pre-hire assessments for both recruiters and candidates.",
                },
                {
                    key: "Advanced Analytics",
                    feature: "Gain valuable insights into your recruitment processes, helping to make informed and strategic decisions.",
                },
            ],
            bio: [
                {
                    head: "Transforming HR Management for the Future",
                    desc: "HRConnect Pro is more than just a product; it’s a revolutionary approach to HR management. Our platform is designed to change the way companies hire, manage, and engage with talent. With its innovative features and focus on industry-specific needs, HRConnect Pro is set to become a leader in the HRTech landscape."
                }
            ],
            caption: "Ready to transform your HR processes? Experience the power of HRConnect Pro and join the future of HR management today.",
            img: hrconnectpro,
        },
        {
            id: 2,
            cat: 'MediAI',
            title: "MediAI Connect: Revolutionizing Healthcare with Advanced Technology",
            intro: "MediAI Connect is an innovative healthcare platform designed to transform the way medical services are delivered. Leveraging cutting-edge technologies like Artificial Intelligence (AI), quantum computing, and Augmented Reality/Virtual Reality (AR/VR), MediAI Connect aims to enhance diagnostic accuracy, streamline healthcare processes, and improve patient outcomes globally.",
            benefits: [
                {
                    key: "Innovative Technology",
                    desc: "Combining AI, quantum computing, and AR/VR for superior healthcare solutions."
                },
                {
                    key: "Enhanced Patient Care",
                    desc: "Providing precise diagnostics and personalized treatment plans."
                },
                {
                    key: "Global Accessibility",
                    desc: "Bridging the gap between patients and healthcare providers through virtual consultations."
                },
                {
                    key: "Data Security",
                    desc: "Ensuring the highest standards of data protection and compliance."
                },
            ],
            features: [
                {
                    key: "AI-Powered Diagnostics",
                    feature: "Our platform utilizes advanced AI algorithms to provide precise and rapid diagnostics. By analyzing vast amounts of medical data, MediAI Connect offers accurate predictions and personalized treatment recommendations, ensuring the highest level of care for patients.",
                },
                {
                    key: "Quantum Computing Integration",
                    feature: "Harnessing the power of quantum computing, MediAI Connect processes complex medical data at unprecedented speeds. This capability allows for enhanced data security and efficient handling of large datasets, revolutionizing the healthcare industry's approach to data management.",
                },
                {
                    key: "AR/VR Functionalities",
                    feature: "MediAI Connect incorporates AR/VR technologies to create immersive healthcare experiences. These features enable virtual consultations, remote surgery assistance, and interactive training for healthcare professionals, bridging the gap between patients and providers.",
                },
                {
                    key: "Comprehensive Data Management",
                    feature: "Ensuring data security and compliance is paramount. MediAI Connect is designed to meet the strictest data protection standards, including HIPAA compliance. Real-time analytics and secure data storage offer peace of mind and operational efficiency.",
                },
                {
                    key: "User-Friendly Interface",
                    feature: "Our intuitive user interface is tailored for both healthcare professionals and patients. Doctors can easily access patient records, conduct virtual consultations, and utilize AI-driven insights. Patients can securely view their health records, schedule appointments, and receive personalized health advice.",
                },
                {
                    key: "Global Impact and Future Launch",
                    feature: "MediAI Connect is set to launch globally in June 2024. As we develop this groundbreaking product, we are committed to continuous innovation and excellence. By integrating the latest technological advancements, MediAI Connect is poised to become a leader in the healthcare technology industry, offering unparalleled value to healthcare providers and patients worldwide.",
                },
            ],
            bio: [
                {
                    head: "Join Us in Transforming Healthcare",
                    desc: "MediAI Connect is more than just a product; it's a revolution in healthcare technology. As we prepare for our global launch, we invite you to join us on this journey to enhance healthcare delivery and improve patient outcomes worldwide."
                }
            ],
            img: mediai
        },
        {
            id: 3,
            cat: 'Connect-Era',
            title: "Welcome to ConnectEra: Where Connections Blossom Across Generations",
            intro: "ConnectEra is more than just a social platform—it's a global community where meaningful relationships flourish. Whether you're seeking friendship, love, or personal growth, ConnectEra provides the perfect space to connect with like-minded individuals from around the world.",
            benefits: [
                {
                    key: "Universal Reach",
                    desc: "In today's interconnected world, distance shouldn't be a barrier to forming deep connections. ConnectEra bridges the gap, allowing you to connect with anyone, anywhere, fostering friendships and relationships that transcend borders."
                },
                {
                    key: "Tailored for Every Generation",
                    desc: "Whether you grew up in the 90s, 2000s, or belong to any other generation, ConnectEra understands your unique needs. Our platform is designed to cater to all age groups, creating a space where wisdom meets modernity."
                },
                {
                    key: "Advanced Matching Algorithms",
                    desc: "Our sophisticated matching technology goes beyond common interests. By analyzing values, life goals, and personality traits, ConnectEra ensures you meet individuals who truly resonate with you, making every interaction purposeful."
                },
                {
                    key: "Versatile Communication Tools",
                    desc: "Stay connected with secure messaging, video calls, and interactive icebreaker prompts. Plan meetups, join engaging virtual events, and participate in community activities, all designed to foster genuine relationships."
                },
                {
                    key: "Embrace Mental Health and Wellbeing",
                    desc: "At ConnectEra, we prioritize your mental health. Access valuable resources, participate in supportive communities, and find solace in knowing you're not alone. Our platform offers a safe haven where you can share, support, and grow."
                },
                {
                    key: "Engage in Vibrant Communities",
                    desc: "Join interest-based groups and generational communities to discuss topics that matter to you. Whether it's a book club, a discussion forum, or a virtual game night, ConnectEra's vibrant communities ensure there's always something to engage with."
                },
                {
                    key: "Safety and Privacy at Its Core",
                    desc: "Your safety is our priority. With robust verification processes, comprehensive privacy controls, and dedicated moderation, ConnectEra ensures a secure and trustworthy environment for all users."
                },
                {
                    key: "Be Part of the Global Movement",
                    desc: "ConnectEra isn't just a platform—it's a movement towards a more connected and compassionate world. By joining us, you're taking a step towards enriching your life and the lives of others through meaningful connections."
                },
            ],
            bio: [
                {
                    head: "Get Started with ConnectEra Today!",
                    desc: "Ready to embark on a journey of genuine connections and personal growth? Sign up now and experience the magic of ConnectEra. Whether you're looking to make new friends, find love, or simply explore new cultures, ConnectEra is your gateway to a more connected world."
                }
            ],
            img: connectera
        },
        {
            id: 4,
            cat: 'Global-Guardian',
            title: "Welcome to GlobalGuardian: Your Ultimate Digital Identity and Authentication Solution",
            intro: "GlobalGuardian is a cutting-edge digital identity and authentication platform designed to provide unparalleled security and convenience for global banking and financial services. Our mission is to protect your identity and ensure seamless access to financial services anywhere in the world.",
            benefits: [
                {
                    key: "Advanced Security",
                    desc: "Protect your identity with state-of-the-art biometric authentication and document validation. Our multi-factor authentication (MFA) ensures your transactions are always secure."
                },
                {
                    key: "Global Accessibility",
                    desc: "Enjoy seamless banking services from anywhere in the world. GlobalGuardian supports multi-language interfaces and alternative verification methods for regions with limited infrastructure."
                },
                {
                    key: "Regulatory Compliance",
                    desc: "Stay ahead of regulatory requirements with our built-in KYC and AML compliance tools. Our platform makes it easy to meet global standards."
                },
                {
                    key: "User-Friendly Interface",
                    desc: "Experience a smooth and intuitive user experience with our easy-to-navigate platform, designed for both financial institutions and individual users."
                },
            ],
            features: [
                {
                    key: "Biometric Authentication",
                    feature: "Leverage the power of facial recognition and fingerprint scanning to verify your identity.",
                },
                {
                    key: "Document Validation",
                    feature: "Quickly and accurately validate identity documents such as passports, driver’s licenses, and national IDs.",
                },
                {
                    key: "Multi-Factor Authentication (MFA)",
                    feature: "Add an extra layer of security to your transactions with SMS codes and authenticator apps.",
                },
                {
                    key: "Seamless Integration",
                    feature: "Connect effortlessly with existing banking systems through our robust APIs.",
                },
                {
                    key: "Compliance Tools",
                    feature: "Monitor and report compliance with real-time dashboards for KYC and AML.",
                },
                {
                    key: "Global Reach",
                    feature: "Access banking services globally with support for multiple languages and regional verification methods.",
                },
            ],
            working: [
                {
                    title: "User Registration",
                    caption: "Start by creating your profile with simple and secure registration."
                },
                {
                    title: "Identity Verification",
                    caption: "Verify your identity using our advanced biometric authentication and document validation."
                },
                {
                    title: "Secure Transactions",
                    caption: "Perform secure transactions with multi-factor authentication."
                },
                {
                    title: "Compliance Monitoring",
                    caption: "Ensure regulatory compliance with our real-time monitoring tools."
                },
            ],
            industries: [
                {
                    name: "Banking and Financial Services",
                    work: "Enhance security, compliance, and user experience."
                },
                {
                    name: "Fintech Companies",
                    work: "Integrate advanced authentication and compliance tools."
                },
                {
                    name: "Rgulatory Bodies",
                    work: "Simplify compliance monitoring and reporting."
                },
            ],
            bio: [
                {
                    head: "Join the Future of Secure Banking",
                    desc: "GlobalGuardian is committed to transforming the way the world accesses and secures financial services. Join us on our mission to provide a secure, compliant, and user-friendly banking experience globally."
                }
            ],
            caption: "Ready to learn more about how GlobalGuardian can protect your identity and enhance your banking experience? Contact us today to schedule a demo or speak with one of our experts.",
            img: globalGuardian
        },
    ])
    return (
        <>
            <bucket.Provider value={[data, setData]}>
                {props.children}
            </bucket.Provider>
        </>
    )
}