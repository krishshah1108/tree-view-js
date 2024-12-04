// script.js

const data = [
  {
    label: "Home",
    to: "/home",
  },
  {
    label: "Products",
    to: "/products",
    children: [
      {
        label: "Electronics",
        to: "/products/electronics",
        children: [
          {
            label: "Mobile Phones",
            to: "/products/electronics/mobiles",
          },
          {
            label: "Laptops",
            to: "/products/electronics/laptops",
          },
          {
            label: "Televisions",
            to: "/products/electronics/televisions",
          },
        ],
      },
      {
        label: "Clothing",
        to: "/products/clothing",
        children: [
          {
            label: "Men's Clothing",
            to: "/products/clothing/men",
          },
          {
            label: "Women's Clothing",
            to: "/products/clothing/women",
          },
        ],
      },
      {
        label: "Accessories",
        to: "/products/accessories",
        children: [
          {
            label: "Watches",
            to: "/products/accessories/watches",
          },
          {
            label: "Bags",
            to: "/products/accessories/bags",
          },
          {
            label: "Shoes",
            to: "/products/accessories/shoes",
          },
        ],
      },
    ],
  },
  {
    label: "About Us",
    to: "/about",
    children: [
      {
        label: "Our Mission",
        to: "/about/mission",
      },
      {
        label: "Our Team",
        to: "/about/team",
        children: [
          {
            label: "Leadership",
            to: "/about/team/leadership",
          },
          {
            label: "Staff",
            to: "/about/team/staff",
          },
        ],
      },
      {
        label: "History",
        to: "/about/history",
      },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
    children: [
      {
        label: "Support",
        to: "/contact/support",
      },
      {
        label: "Feedback",
        to: "/contact/feedback",
        children: [
          {
            label: "Submit Feedback",
            to: "/contact/feedback/submit",
          },
          {
            label: "View Feedback",
            to: "/contact/feedback/view",
          },
        ],
      },
      {
        label: "Careers",
        to: "/contact/careers",
      },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      {
        label: "Consulting",
        to: "/services/consulting",
        children: [
          {
            label: "Business Consulting",
            to: "/services/consulting/business",
          },
          {
            label: "Tech Consulting",
            to: "/services/consulting/tech",
          },
        ],
      },
      {
        label: "Support",
        to: "/services/support",
        children: [
          {
            label: "Customer Support",
            to: "/services/support/customer",
          },
          {
            label: "Technical Support",
            to: "/services/support/technical",
          },
        ],
      },
      {
        label: "Training",
        to: "/services/training",
        children: [
          {
            label: "Corporate Training",
            to: "/services/training/corporate",
            children: [
              {
                label: "Onsite Training",
                to: "/services/training/corporate/onsite",
              },
              {
                label: "Virtual Training",
                to: "/services/training/corporate/virtual",
                children: [
                  {
                    label: "Online Training",
                    to: "/services/training/corporate/virtual/online",
                  },
                  {
                    label: "Offline Training",
                    to: "/services/training/corporate/virtual/offline",
                  },
                ],
              },
            ],
          },
          {
            label: "Online Training",
            to: "/services/training/online",
          },
        ],
      },
    ],
  },
  {
    label: "Blog",
    to: "/blog",
    children: [
      {
        label: "Latest Posts",
        to: "/blog/latest",
      },
      {
        label: "Popular Posts",
        to: "/blog/popular",
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  // Function to create nav items dynamically
  const createNavItems = (items, parentElement) => {
    items.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.to;
      a.textContent = item.label;
      li.appendChild(a);

      parentElement.appendChild(li);

      // Check if item has children
      if (item.children) {
        const ul = document.createElement("ul");
        createNavItems(item.children, ul); // Recursively add child items
        li.appendChild(ul);
      }
    });
  };

  createNavItems(data, navbar); // Start generating nav items
});
