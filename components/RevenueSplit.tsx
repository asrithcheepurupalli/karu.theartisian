export default function RevenueSplit({
  artisanShare,
  variant = "panel",
}: {
  artisanShare: number;
  variant?: "panel" | "inline";
}) {
  const platform = 100 - artisanShare;

  return (
    <div className={`revsplit revsplit--${variant}`}>
      <div className="revsplit__head">
        <p className="eyebrow">Where your money goes</p>
        <p className="revsplit__line">
          <strong>{artisanShare}%</strong> of this purchase is paid directly to
          the artisan.
        </p>
      </div>

      <div className="revsplit__bar" role="img" aria-label={`${artisanShare}% to the artisan, ${platform}% to the platform`}>
        <span className="revsplit__seg revsplit__seg--artisan" style={{ width: `${artisanShare}%` }} />
        <span className="revsplit__seg revsplit__seg--platform" style={{ width: `${platform}%` }} />
      </div>

      <div className="revsplit__legend">
        <span>
          <i className="revsplit__dot revsplit__dot--artisan" /> Artisan {artisanShare}%
        </span>
        <span>
          <i className="revsplit__dot revsplit__dot--platform" /> Platform {platform}%
        </span>
      </div>
    </div>
  );
}
