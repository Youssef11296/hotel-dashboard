import { Room } from "../models/Room";
import { floors } from "./floors";

export const rooms: Room[] = [
  {
    id: "111",
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
    photos: [
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
      "https://assets.architecturaldigest.in/photos/60084dd6cce5700439e12bf7/16:9/pass/modern-living-room-decor-1366x768.jpg",
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png",
      "https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-lb-avery-cox-virginia-highlands2576-v2-1670968227.jpg",
    ],
    number: "Room-100",
    type: "BED_ROOM",
    petsAvailability: true,
    dayCost: "$200",
    isReserved: true,
    currentTotalResidents: 3,
    numOfBeds: 3,
    capacity: 3,
    floor: {
      floorNumber: floors[0].number,
      floorId: floors[0].floorId,
    },
    sales: {
      currentMonthInEGP: 4000,
      lastMonthInEGP: 1000,
    },
  },
  {
    id: "222",
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
    photos: [
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
      "https://assets.architecturaldigest.in/photos/60084dd6cce5700439e12bf7/16:9/pass/modern-living-room-decor-1366x768.jpg",
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png",
      "https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-lb-avery-cox-virginia-highlands2576-v2-1670968227.jpg",
    ],
    number: "Room-200",
    type: "BED_ROOM",
    petsAvailability: true,
    dayCost: "$500",
    isReserved: false,
    currentTotalResidents: 3,
    numOfBeds: 2,
    capacity: 2,
    floor: {
      floorNumber: floors[0].number,
      floorId: floors[0].floorId,
    },
    sales: {
      currentMonthInEGP: 3000,
      lastMonthInEGP: 1000,
    },
  },
  {
    id: "300",
    image:
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png",
    photos: [
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
      "https://assets.architecturaldigest.in/photos/60084dd6cce5700439e12bf7/16:9/pass/modern-living-room-decor-1366x768.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-lb-avery-cox-virginia-highlands2576-v2-1670968227.jpg",
    ],
    number: "Room-300",
    type: "BED_ROOM",
    petsAvailability: true,
    dayCost: "$300",
    isReserved: true,
    currentTotalResidents: 3,
    numOfBeds: 1,
    capacity: 1,
    floor: {
      floorNumber: floors[0].number,
      floorId: floors[0].floorId,
    },
    sales: {
      currentMonthInEGP: 2000,
      lastMonthInEGP: 1000,
    },
  },
  {
    id: "300",
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
    photos: [
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
      "https://assets.architecturaldigest.in/photos/60084dd6cce5700439e12bf7/16:9/pass/modern-living-room-decor-1366x768.jpg",
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png",
      "https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-lb-avery-cox-virginia-highlands2576-v2-1670968227.jpg",
    ],
    number: "Room-400",
    type: "BED_ROOM",
    petsAvailability: true,
    dayCost: "$300",
    isReserved: true,
    currentTotalResidents: 3,
    numOfBeds: 1,
    capacity: 1,
    floor: {
      floorNumber: floors[0].number,
      floorId: floors[0].floorId,
    },
    sales: {
      currentMonthInEGP: 2000,
      lastMonthInEGP: 1000,
    },
  },
  {
    id: "300",
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
    photos: [
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
      "https://assets.architecturaldigest.in/photos/60084dd6cce5700439e12bf7/16:9/pass/modern-living-room-decor-1366x768.jpg",
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png",
      "https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-lb-avery-cox-virginia-highlands2576-v2-1670968227.jpg",
    ],
    number: "Room-500",
    type: "BED_ROOM",
    petsAvailability: true,
    dayCost: "$300",
    isReserved: true,
    currentTotalResidents: 3,
    numOfBeds: 1,
    capacity: 1,
    floor: {
      floorNumber: floors[0].number,
      floorId: floors[0].floorId,
    },
    sales: {
      currentMonthInEGP: 6250,
      lastMonthInEGP: 1000,
    },
  },
  {
    id: "300",
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
    photos: [
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
      "https://assets.architecturaldigest.in/photos/60084dd6cce5700439e12bf7/16:9/pass/modern-living-room-decor-1366x768.jpg",
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png",
      "https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-lb-avery-cox-virginia-highlands2576-v2-1670968227.jpg",
    ],
    number: "Room-300",
    type: "MEETING_ROOM",
    petsAvailability: true,
    dayCost: "$300",
    isReserved: true,
    currentTotalResidents: 3,
    numOfBeds: 1,
    capacity: 1,
    floor: {
      floorNumber: floors[0].number,
      floorId: floors[0].floorId,
    },
    sales: {
      currentMonthInEGP: 8000,
      lastMonthInEGP: 10000,
    },
  },
  {
    id: "300",
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
    photos: [
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
      "https://assets.architecturaldigest.in/photos/60084dd6cce5700439e12bf7/16:9/pass/modern-living-room-decor-1366x768.jpg",
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png",
      "https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-lb-avery-cox-virginia-highlands2576-v2-1670968227.jpg",
    ],
    number: "Room-600",
    type: "BED_ROOM",
    petsAvailability: true,
    dayCost: "$300",
    isReserved: true,
    currentTotalResidents: 3,
    numOfBeds: 1,
    capacity: 1,
    floor: {
      floorNumber: floors[1].number,
      floorId: floors[1].floorId,
    },
    sales: {
      currentMonthInEGP: 10000,
      lastMonthInEGP: 3000,
    },
  },
  {
    id: "4000",
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
    photos: [
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
      "https://assets.architecturaldigest.in/photos/60084dd6cce5700439e12bf7/16:9/pass/modern-living-room-decor-1366x768.jpg",
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png",
      "https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-lb-avery-cox-virginia-highlands2576-v2-1670968227.jpg",
    ],
    number: "Room-800",
    type: "MEETING_ROOM",
    petsAvailability: false,
    dayCost: "$300",
    isReserved: true,
    currentTotalResidents: 3,
    numOfBeds: 1,
    capacity: 1,
    floor: {
      floorNumber: floors[3].number,
      floorId: floors[3].floorId,
    },
    sales: {
      currentMonthInEGP: 10000,
      lastMonthInEGP: 3000,
    },
  },
  {
    id: "900",
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
    photos: [
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg",
      "https://assets.architecturaldigest.in/photos/60084dd6cce5700439e12bf7/16:9/pass/modern-living-room-decor-1366x768.jpg",
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png",
      "https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-lb-avery-cox-virginia-highlands2576-v2-1670968227.jpg",
    ],
    number: "Room-900",
    type: "MEETING_ROOM",
    petsAvailability: false,
    dayCost: "$300",
    isReserved: true,
    currentTotalResidents: 3,
    numOfBeds: 1,
    capacity: 1,
    floor: {
      floorNumber: floors[2].number,
      floorId: floors[2].floorId,
    },
    sales: {
      currentMonthInEGP: 10000,
      lastMonthInEGP: 3000,
    },
  },
];
