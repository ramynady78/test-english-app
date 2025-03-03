function WhyChooseUs(){
    const features = [
        {
          icon: "🛡️",
          title: "It's Reliable.",
          description:
            "Created by experts. This online English proficiency test has been developed over a decade with leading scientists in the field of English assessment.",
        },
        {
          icon: "📱",
          title: "It's Accessible.",
          description:
            "An English level test for everyone. We is available on any desktop, tablet, or mobile device. All you need is an internet connection.",
        },
        {
          icon: "🎁",
          title: "It's Free.",
          description:
            "Why pay for accurate results? There shouldn’t be any barriers to testing your English. English tests are an essential tool.",
        },
      ];
    return (
        <section className="features-section">
        <h2>Why US?</h2>
        <div className="features-container">
            {features.map((feature, index) => (
            <div key={index} className="feature-card">
                <div className="feature-card-title">
                    <span className="feature-icon">{feature.icon}</span>
                    <h3>{feature.title}</h3>
                </div>
                <p>{feature.description}</p>
            </div>
            ))}
        </div>
        </section>
    );

}

export default WhyChooseUs;