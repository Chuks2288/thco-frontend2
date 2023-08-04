import { BsGrid, BsHandbag } from 'react-icons/bs';
import { GoPeople } from 'react-icons/go';
import { LuFolderMinus } from 'react-icons/lu';
import { AiOutlineMessage } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BiCart } from 'react-icons/bi';
import { phone1, phone2 } from '../images';
import { TbCurrencyNaira } from 'react-icons/tb';
import { photo1, photo2, photo3 } from '../images';



export const SidebarMenu = [
    {
        title: "Dashboard",
        icon: BsGrid,
        path: "/"
    },
    {
        title: "Orders",
        icon: BsHandbag,
        path: "/orders"
    },
    {
        title: "Customers",
        icon: GoPeople,
        path: "/customers"
    },
    {
        title: "Inventory",
        icon: LuFolderMinus,
        path: "/inventory"
    },
    {
        title: "Conversations",
        icon: AiOutlineMessage,
        path: "/conversations"
    },
    {
        title: "Settings",
        icon: FiSettings,
        path: "/settings"
    },
]



export const cardcontent1 = [
    {
        icon1: GoPeople,
        bgColor: "#5570F1",
        textColor: "#529C66",
        icon2: MdOutlineKeyboardArrowDown,
        day: "This Week",
        title: "Sales",
        total: "4,000,0000.00",
        status: "Volume",
        statusCount: 450,
        statusPercent: "+20.00%"
    },
    {
        icon1: GoPeople,
        bgColor: "#FFCC91",
        textColor: "#529C66",
        icon2: MdOutlineKeyboardArrowDown,
        day: "This Week",
        title: "Customers",
        total: "1,250",
        totalPercent: "+15.80%",
        status: "Active",
        statusCount: "1,180",
        statusPercent: "+85%"
    },
    {
        icon1: BsHandbag,
        bgColor: "#FFCC91",
        icon2: MdOutlineKeyboardArrowDown,
        day: "This Week",
        title: "All Orders",
        total: "450",
        status: "Completed",
        status2: "Pending",
        pending: 5,
        statusCount: 445,
    },
]


export const cardcontent2 = [
    {
        icon1: LuFolderMinus,

        iconColor: "#fff",
        iconBgColor: "lightgray",
        bgColor: "blue",
        title: "All Products",
        titleColor: "#fff",
        total: "45",
        totalColor: "#fff",
        status: "Active",
        statusCount: 32,
        statusColor: "#fff",
        statusPercent: "+24%",
        statusPercentColor: "#DBDEEE"
    },
    {
        icon1: BiCart,
        iconColor: "#000",
        iconBgColor: "#FFCC91",
        bgColor: "#fff",
        icon2: MdOutlineKeyboardArrowDown,
        day: "This Week",
        title: "Abandoned Cart",
        titleColor: "#CC5F5F",
        total: "20%",
        totalColor: "#000",
        totalPercent: "+0.00%",
        totalPercentColor: "#519C66",
        status: "Customers",
        statusColor: "#000",
        statusCount: "30",
    },
]


export const OrderContent = [
    {
        img: phone1,
        model: "iPhone 13",
        price: "730,000.00",
        orderNumber: 1,
        status: "pending",
        bgColor: "rgb(219, 174, 174)",
        textColor: "red",
        date: "12 Sept 2022",
    },
    {
        img: phone2,
        model: "iPhone 13",
        price: "730,000.00",
        orderNumber: 1,
        status: "completed",
        bgColor: "rgb(208, 238, 208)",
        textColor: "green",
        date: "12 Sept 2022",
    },
    {
        img: phone1,
        model: "iPhone 13",
        price: "730,000.00",
        orderNumber: 1,
        status: "pending",
        bgColor: "rgb(219, 174, 174)",
        textColor: "red",
        date: "12 Sept 2022",
    },
    {
        img: phone2,
        model: "iPhone 13",
        price: "730,000.00",
        orderNumber: 1,
        status: "completed",
        bgColor: "rgb(208, 238, 208)",
        textColor: "green",
        date: "12 Sept 2022",
    },
    {
        img: phone2,
        model: "iPhone 13",
        price: "730,000.00",
        orderNumber: 1,
        status: "completed",
        bgColor: "rgb(208, 238, 208)",
        textColor: "green",
        date: "12 Sept 2022",
    },
    {
        img: phone2,
        model: "iPhone 13",
        price: "730,000.00",
        orderNumber: 1,
        status: "completed",
        bgColor: "rgb(208, 238, 208)",
        textColor: "green",
        date: "12 Sept 2022",
    },
    {
        img: phone1,
        model: "iPhone 13",
        price: "730,000.00",
        orderNumber: 1,
        status: "pending",
        bgColor: "rgb(219, 174, 174)",
        textColor: "red",
        date: "12 Sept 2022",
    },
    {
        img: phone1,
        model: "iPhone 13",
        price: "730,000.00",
        orderNumber: 1,
        status: "pending",
        bgColor: "rgb(219, 174, 174)",
        textColor: "red",
        date: "12 Sept 2022",
    },
    {
        img: phone1,
        model: "iPhone 13",
        price: "730,000.00",
        orderNumber: 1,
        status: "pending",
        bgColor: "rgb(219, 174, 174)",
        textColor: "red",
        date: "12 Sept 2022",
    },
]


export const chatNameList: any = [
    {
        path: "/one",
        name: "Jane Doe",
        img: photo1,
        message: "Hi, i want make enquiries about yo...",
        time: "12:55 am",
        statusColor: "blue",
    },
    {
        path: "/two",
        name: "Janet Adebayo",
        img: photo2,
        message: "Hi, i want make enquiries about yo...",
        time: "12:55 am",
        statusColor: "lightgray",
    },
    {
        path: "/three",
        name: "Kunle Adekunle",
        img: photo3,
        message: "Hi, i want make enquiries about yo...",
        time: "12:55 am",
        statusColor: "blue",
    },
    {
        path: "/four",
        name: "Jane Doe",
        img: photo1,
        message: "Hi, i want make enquiries about yo...",
        time: "12:55 am",
        statusColor: "blue",
    },
    {
        path: "/five",
        name: "Janet Adebayo",
        img: photo2,
        message: "Hi, i want make enquiries about yo...",
        time: "12:55 am",
        statusColor: "lightgray",
    },
    {
        path: "/six",
        name: "Kunle Adekunle",
        img: photo3,
        message: "Hi, i want make enquiries about yo...",
        time: "12:55 am",
        statusColor: "blue",
    },
    {
        path: "/seven",
        name: "Jane Doe",
        img: photo1,
        message: "Hi, i want make enquiries about yo...",
        time: "12:55 am",
        statusColor: "blue",
    },
    {
        path: "/eight",
        name: "Janet Adebayo",
        img: photo2,
        message: "Hi, i want make enquiries about yo...",
        time: "12:55 am",
        statusColor: "lightgray",
    },
    {
        name: "Kunle Adekunle",
        img: photo3,
        message: "Hi, i want make enquiries about yo...",
        time: "12:55 am",
        statusColor: "blue",
    },
]