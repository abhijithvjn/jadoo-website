export const HOME_PAGE_DATA = {
  page_type: 'home',
  widgets: [
    {
      widget_type: 'HeroBanner',
      data: {
        tag: 'BEST DESTINATIONS AROUND THE WORLD',
        title: 'Travel, enjoy and live a new and full life',
        description:
          'Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.',
        primaryButton: { label: 'Find out more', link: '#' },
        secondaryButton: { label: 'Play Demo', link: '#' },
        images: {
          main: '/images/home/traveller.png',
          underline: '/images/home/red_line.png',
          backgroundShape: '/images/home/decore.png',
          aeroplane: '/images/home/aeroplane.png',
        },
      },
    },
    {
      widget_type: 'ServicesGrid',
      data: {
        category_tag: 'CATEGORY',
        title: 'We Offer Best Services',
        decorations: {
          topRightGrid: '/images/home/services-grid-bg.png',
          redAccentShape: '/images/home/bottom-red.png',
        },
        services: [
          {
            id: 1,
            title: 'Calculated Weather',
            description: 'Built Wicket longer admire do barton vanity itself do in it.',
            icon: '/images/home/weather.png',
            isFeatured: false,
          },
          {
            id: 2,
            title: 'Best Flights',
            description: 'Engrossed listening. Park gate sell they west hard for the.',
            icon: '/images/home/aeroplane.png',
            isFeatured: true, // Triggers the white card + shadow + red accent
          },
          {
            id: 3,
            title: 'Local Events',
            description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
            icon: '/images/home/event.png',
            isFeatured: false,
          },
          {
            id: 4,
            title: 'Customization',
            description: 'We deliver outsourced aviation services for military customers',
            icon: '/images/home/customization.png',
            isFeatured: false,
          },
        ],
      },
    },
    {
      widget_type: 'DestinationsGrid',
      data: {
        tag: 'Top Selling',
        title: 'Top Destinations',
        decoration: '/images/home/decore_destination.png', // The loopy line on the right side
        destinations: [
          {
            id: 1,
            location: 'Rome, Italy',
            price: '$5,42k',
            duration: '10 Days Trip',
            image: '/images/home/rome.png',
            icon: '/images/home/navigation_destination.png', // The small black sender icon
          },
          {
            id: 2,
            location: 'London, UK',
            price: '$4.2k',
            duration: '12 Days Trip',
            image: '/images/home/london.png',
            icon: '/images/home/navigation_destination.png',
          },
          {
            id: 3,
            location: 'Full Europe',
            price: '$15k',
            duration: '28 Days Trip',
            image: '/images/home/europe.png',
            icon: '/images/home/navigation_destination.png',
          },
        ],
      },
    },
    {
      widget_type: 'BookingSteps',
      data: {
        tag: 'Easy and Fast',
        title: 'Book Your Next Trip In 3 Easy Steps',

        // Left Side Content
        steps: [
          {
            id: 1,
            title: 'Choose Destination',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
            icon: '/icons/selection.png',
            iconBgColor: '#F1A501', // Yellow
          },
          {
            id: 2,
            title: 'Make Payment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
            icon: '/icons/payment.png',
            iconBgColor: '#DF6951', // Red/Orange
          },
          {
            id: 3,
            title: 'Reach Airport on Selected Date',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
            icon: '/icons/taxi.png',
            iconBgColor: '#006380', // Blue
          },
        ],

        // Right Side "Floating Card" Content
        bookingCard: {
          mainImage: '/images/trip-to-greece.jpg',
          title: 'Trip To Greece',
          dateRange: '14-29 June',
          author: 'by Robbin joseph',
          footprintIcon: '/icons/leaf.png',
          mapIcon: '/icons/map.png',
          sendIcon: '/icons/send-plane.png',
          stats: '24 people going',
          favoriteIcon: '/icons/heart-outline.png',

          // The smaller "Ongoing" overlay card
          ongoingOverlay: {
            destinationImage: '/images/rome-thumb.jpg',
            status: 'Ongoing',
            title: 'Trip to rome',
            completionPercentage: 40,
            barColor: '#8A79DF',
          },
        },
      },
    },
    {
      widget_type: 'TestimonialsSlider',
      data: {
        tag: 'TESTIMONIALS',

        // These titles will change based on the active slide index
        rotatingTitles: [
          'What People Say About Us.',
          'Voices Of Our Global Explorers.',
          'Real Stories From Real Travelers.',
        ],

        pagination: {
          total: 3,
          activeIndex: 0,
        },

        navigationIcons: {
          prev: '/icons/arrow-up.png',
          next: '/icons/arrow-down.png',
        },

        testimonials: [
          {
            id: 1,
            userImage: '/images/mike-taylor.png',
            quote:
              '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
            userName: 'Mike Taylor',
            location: 'Lahore, Pakistan',
            isTopCard: true,
          },
          {
            id: 2,
            userImage: '/images/chris-thomas.png',
            quote:
              "“The booking process was incredibly seamless. I've never had such a stress-free experience planning a full Europe tour. Highly recommended!”",
            userName: 'Chris Thomas',
            role: 'CEO of Red Button',
            location: 'London, UK',
            isTopCard: false,
          },
          {
            id: 3,
            userImage: '/images/sarah-jenkins.png',
            quote:
              '“Finding the right destinations used to take me weeks. With this platform, I had my entire itinerary for Greece settled in under ten minutes.”',
            userName: 'Sarah Jenkins',
            role: 'Founder of TravelLog',
            location: 'New York, USA',
            isTopCard: false,
          },
        ],
      },
    },
    {
      widget_type: 'PartnerLogos',
      data: {
        logos: [
          { id: 1, name: 'Axon Airlines', src: '/images/axon.png' },
          { id: 2, name: 'Jetstar', src: '/images/jetstar.png' },
          { id: 3, name: 'Expedia', src: '/images/expedia.png', isFeatured: true },
          { id: 4, name: 'Qantas', src: '/images/qantas.png' },
          { id: 5, name: 'Alitalia', src: '/images/alitalia.png' },
        ],
      },
    },
    {
      widget_type: 'NewsletterSubscribe',
      data: {
        title: 'Subscribe to get information, latest news and other interesting offers about Jadoo',
        inputPlaceholder: 'Your email',
        buttonLabel: 'Subscribe',
        decorations: {
          backgroundSpiralLeft: '/images/spiral_left.png',
          backgroundSpiralRight: '/images/spiral_right.png',
          plusGridBottomRight: '/images/plus_grid_orange.png',
          sendIconTopRight: '/images/send_icon_purple.png',
        },
      },
    },
  ],
};
