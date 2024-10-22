import React from "react";

// Example data structure for 20 images grouped by category
const images = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532861/utilities/templates/nathan-dumlao-5BB_atDT4oA-unsplash_wqzzrm.jpg",
    category: "Weddings",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532849/utilities/templates/hillshire-farm-YGcleYb9wEQ-unsplash_mrhn0t.jpg",
    category: "Weddings",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532908/utilities/templates/jakob-owens-SiniLJkXhMc-unsplash_lkflde.jpg",
    category: "Portraits",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532908/utilities/templates/ellie-cooper--a_M4o2n-0U-unsplash_mdwukk.jpg",
    category: "Portraits",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532857/utilities/templates/jakayla-toney-o-qqGPeDWxY-unsplash_keb8cd.jpg",
    category: "Events",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532858/utilities/templates/ksav-pun-EHAn0csi6-E-unsplash_ynjfuv.jpg",
    category: "Events",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532849/utilities/templates/hisu-lee-FTW8ADj5igs-unsplash_b929vo.jpg",
    category: "Commercial",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532840/utilities/templates/robert-ipsihi-AoVHWma5CoE-unsplash_jkypgr.jpg",
    category: "Commercial",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532839/utilities/templates/osarugue-igbinoba-4ardiyvfhTM-unsplash_g5570l.jpg",
    category: "Weddings",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532837/utilities/templates/andre-hunter-YK46WkDJj8s-unsplash_xhp2dg.jpg",
    category: "Weddings",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532803/utilities/templates/nataliya-melnychuk-iHq2Mjpr5UU-unsplash_phluts.jpg",
    category: "Portraits",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532791/utilities/templates/bave-pictures-X5_exU5fiQA-unsplash_e2mzwg.jpg",
    category: "Portraits",
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532791/utilities/templates/bave-pictures-DVtUCb0gmcA-unsplash_iwiwou.jpg",
    category: "Events",
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532775/utilities/templates/jay-chen-nCEGI7gBkg8-unsplash_vd0edd.jpg",
    category: "Events",
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532769/utilities/templates/trust-tru-katsande-CSkyEOU8yw4-unsplash_tt2hp6.jpg",
    category: "Commercial",
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532763/utilities/templates/jay-chen-mKbZ3zAdiB4-unsplash_zlad7z.jpg",
    category: "Commercial",
  },
  {
    id: 17,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729525403/utilities/templates/neom-StbFt6TU1xs-unsplash_y2jumm.jpg",
    category: "Weddings",
  },
  {
    id: 18,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729525367/utilities/templates/urban-vintage-ScNzlHZejSU-unsplash_dhylzf.jpg",
    category: "Weddings",
  },
  {
    id: 19,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729518941/utilities/templates/pxdfghjk_pfzu6t.jpg",
    category: "Portraits",
  },
  {
    id: 20,
    src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729532763/utilities/templates/jay-chen-mKbZ3zAdiB4-unsplash_zlad7z.jpg",
    category: "Portraits",
  },
];

// Define varying column spans for different images
const columnSpans = [1, 3, 2, 2, 2, 2, 2, 3, 1];

function Overview() {
  return (
    <div className="mt-[100px]">
      <div className="container mx-auto">
        <div className="min-h-screen space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
            {images.map((image, index) => {
              const span = columnSpans[index % columnSpans.length]; // Determine the span for the current image
              return (
                <div
                  key={image.id}
                  className={`h-[300px] w-full rounded-lg border-2 bg-black border-primary overflow-hidden 
                  ${span === 1 ? 'sm:col-span-1' : ''}
                  ${span === 2 ? 'sm:col-span-2' : ''}
                  ${span === 3 ? 'sm:col-span-3' : ''}`}
                >
                  <img
                    src={image.src}
                    alt={image.category}
                    className="h-full w-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

 

export default Overview;
