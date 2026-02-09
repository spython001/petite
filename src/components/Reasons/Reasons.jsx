import './Reasons.css'

const reasons = [
  "beyond your undisputable beauty, i do not need to compensate to love you",
  "i get drawn to and drown in that immaculate smile of yours",
  "life is wayyy better with you",
  "you’re my safe place ❤️",
  "you want to know more? come and stay with me in this journey"
];

export default function Reasons() {
  return (
    <section className="reason">
      <h2 className="reasonH2">A few reasons why You’re My Person</h2>
      <div className="grid">
        {reasons.map((reason, index) => (
          <div key={index} className="card">
            {reason}
          </div>
        ))}
      </div>
    </section>
  );
}
