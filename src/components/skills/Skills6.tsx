import { expertiseItems } from "@/data/skills";
export default function Skills6() {
  return (
    <div className="tmp-card-body expertise-card">
      <h3 className="card-title">My Expert Area</h3>
      <div className="expertise-main">
        <div className="row g-3 mt--0">
          {expertiseItems.map(
            ({ title, alt, src, width, height, extraClass }) => (
              <div
                key={title}
                className={`col-xl-4 col-md-4 col-sm-6 col-6 ${extraClass}`}
              >
                <div className="expertise-item">
                  <div className="image text-center">
                    <img alt={alt} src={src} width={width} height={height} />
                  </div>
                  <div className="text">
                    <h4 className="title">{title}</h4>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
