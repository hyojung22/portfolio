import LeftPanel from '@/layout/LeftPanel'
import RightPanel from '@/layout/RightPanel'
import TabMenu from '@/layout/TabMenu'

export default function MinihompyLayout() {
  return (
    <div className="relative aspect-[1084/729] w-[900px]">
      {/* SVG 배경 */}
      <BookSvg className="absolute top-0 left-0 h-full w-full" />

      <div className="absolute top-0 left-0 flex h-full w-full">
        {/* 왼쪽 패널 - SVG rect x:36.5 y:38.5 width:282 height:653 기준으로 % 계산 */}
        <div
          className="absolute box-border"
          style={{
            left: `${(36.5 / 1084) * 100}%`,
            top: `${(38.5 / 729) * 100}%`,
            width: `${(282 / 1084) * 100}%`,
            height: `${(653 / 729) * 100}%`,
            padding: '20px 10px',
          }}
        >
          <LeftPanel />
        </div>

        <div
          className="absolute box-border"
          style={{
            left: `${(295 / 1084) * 100}%`,
            top: `${(135 / 729) * 100}%`,
            width: `${(55 / 1084) * 100}%`,
            zIndex: 10,
          }}
        >
          <BinderSvg />
        </div>

        {/* 오른쪽 패널 -  SVG rect x:328.5 y:38.5 width:714 height:653 기준으로 % 계산 */}
        <div
          className="absolute box-border"
          style={{
            left: `${(328.5 / 1084) * 100}%`,
            top: `${(38.5 / 729) * 100}%`,
            width: `${(714 / 1084) * 100}%`,
            height: `${(653 / 729) * 100}%`,
            padding: '20px 10px',
          }}
        >
          <RightPanel />
        </div>
      </div>
      <div className="absolute top-23 -right-[24.666px] z-10">
        <TabMenu />
      </div>
    </div>
  )
}

function BookSvg({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1084 729"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 11.5013V717.502C1.5 723.024 5.87025 727.502 11.3931 727.502H305.5C311.497 727.502 316.594 725.704 319.715 724.264C321.725 723.336 324.193 723.459 326.177 724.444C329.005 725.849 333.677 727.502 340 727.502H1072.21C1077.73 727.502 1082 723.024 1082 717.502V11.5016C1082 5.9787 1077.74 1.50153 1072.21 1.50158C1004.64 1.50209 602.302 1.50492 339 1.5015C334.232 1.50144 328.071 4.28569 324.628 6.06091C322.986 6.90708 321.013 6.90719 319.369 6.06735C315.893 4.29249 309.615 1.50164 304.5 1.5015C200.903 1.49859 50.9891 1.50069 11.3928 1.50133C5.86998 1.50142 1.5 5.97854 1.5 11.5013Z"
        fill="#57B3D5"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M23.5 45.5025V685.501C23.5 696.547 32.3749 705.501 43.4206 705.501H305.965C311.161 705.501 315.646 703.504 318.643 701.696C320.919 700.322 324.101 700.487 326.341 701.92C329.07 703.665 333.244 705.501 338.724 705.501H1034.54C1045.59 705.501 1054.5 696.547 1054.5 685.501V45.503C1054.5 34.4573 1045.59 25.5029 1034.54 25.503C945.433 25.5036 577.804 25.5059 338.724 25.5029C334.431 25.5028 328.948 28.6758 325.604 30.9223C323.793 32.1392 321.37 32.1396 319.553 30.9318C316.172 28.6848 310.572 25.503 305.965 25.5029C215.559 25.5004 91.2981 25.5018 43.4202 25.5025C32.3747 25.5027 23.5 34.457 23.5 45.5025Z"
        stroke="#7DCCE9"
        strokeWidth="3"
        strokeDasharray="8 5"
      />
      <path
        d="M34.5 50.2636V680.74C34.5 688.34 40.567 694.501 48.167 694.501H307.634C312.917 694.501 317.399 692.926 320.108 691.686C321.808 690.908 323.884 691.012 325.56 691.84C328.015 693.052 332.115 694.501 337.688 694.501H1030.22C1037.82 694.501 1043.76 688.34 1043.76 680.74V50.2639C1043.76 42.6638 1037.82 36.5028 1030.22 36.5028C952.932 36.5033 563.109 36.5056 337.688 36.5027C333.502 36.5027 328.085 38.9251 325.099 40.4442C323.711 41.1502 322.046 41.1502 320.656 40.4494C317.643 38.9307 312.124 36.5029 307.634 36.5027C220.811 36.5004 90.3377 36.5019 48.1668 36.5025C40.5669 36.5026 34.5 42.6636 34.5 50.2636Z"
        fill="#E4E6E8"
        stroke="black"
        strokeWidth="3"
      />
      <rect x="36.5" y="38.5" width="282" height="653" rx="12" fill="white" />
      <rect
        x="328.5"
        y="38.5"
        width="714"
        height="653"
        rx="12"
        fill="#EEEEEE"
      />
    </svg>
  )
}

function BinderSvg() {
  return (
    <svg
      // width="47"
      // height="424"
      viewBox="0 0 47 424"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="7.5" fill="white" stroke="#7A7A7A" />
      <circle cx="39" cy="8" r="7.5" fill="white" stroke="#7A7A7A" />
      <rect
        x="3.5"
        y="3.5"
        width="40"
        height="9"
        rx="4.5"
        fill="url(#paint0_linear_47_96)"
        stroke="#7A7A7A"
      />
      <circle cx="8" cy="52" r="7.5" fill="white" stroke="#7A7A7A" />
      <circle cx="39" cy="52" r="7.5" fill="white" stroke="#7A7A7A" />
      <rect
        x="3.5"
        y="47.5"
        width="40"
        height="9"
        rx="4.5"
        fill="url(#paint1_linear_47_96)"
        stroke="#7A7A7A"
      />
      <circle cx="8" cy="371" r="7.5" fill="white" stroke="#7A7A7A" />
      <circle cx="39" cy="371" r="7.5" fill="white" stroke="#7A7A7A" />
      <rect
        x="3.5"
        y="366.5"
        width="40"
        height="9"
        rx="4.5"
        fill="url(#paint2_linear_47_96)"
        stroke="#7A7A7A"
      />
      <circle cx="8" cy="416" r="7.5" fill="white" stroke="#7A7A7A" />
      <circle cx="39" cy="416" r="7.5" fill="white" stroke="#7A7A7A" />
      <rect
        x="3.5"
        y="411.5"
        width="40"
        height="9"
        rx="4.5"
        fill="url(#paint3_linear_47_96)"
        stroke="#7A7A7A"
      />
      <defs>
        <linearGradient
          id="paint0_linear_47_96"
          x1="15.8125"
          y1="7.44444"
          x2="30.2054"
          y2="9.34122"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C5C5C5" />
          <stop offset="1" stopColor="#FDFDFD" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_47_96"
          x1="15.8125"
          y1="51.4444"
          x2="30.2054"
          y2="53.3412"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C5C5C5" />
          <stop offset="1" stopColor="#FDFDFD" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_47_96"
          x1="15.8125"
          y1="370.444"
          x2="30.2054"
          y2="372.341"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C5C5C5" />
          <stop offset="1" stopColor="#FDFDFD" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_47_96"
          x1="15.8125"
          y1="415.444"
          x2="30.2054"
          y2="417.341"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C5C5C5" />
          <stop offset="1" stopColor="#FDFDFD" />
        </linearGradient>
      </defs>
    </svg>
  )
}
