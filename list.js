const courses = [
  
 

// {
//     id: 7707039,
//     name: "رساله دكترا",
//     code: "21_7707039",
//     prof: "اساتيد گروه آموزشي",
//     units: 24,
//     sessions: [],
//     examDate: "",
//     department: "دانشکده نقشه برداری",
//     capacity: 60,
//     gender: "مختلط"
//   },
// {
//     id: 7707057,
//     name: "رساله دكتري پژوهشي",
//     code: "21_7707057",
//     prof: "اساتيد گروه آموزشي",
//     units: 30,
//     sessions: [],
//     examDate: "",
//     department: "دانشکده نقشه برداری",
//     capacity: 5,
//     gender: "مختلط"
//   },
// {
//     id: 7707059,
//     name: "دفاع از پيشنهاد رساله دكتري",
//     code: "21_7707059",
//     prof: "اساتيد گروه آموزشي",
//     units: 0,
//     sessions: [],
//     examDate: "",
//     department: "دانشکده نقشه برداری",
//     capacity: 10,
//     gender: "مختلط"
//   },
// {
//     id: 7707060,
//     name: "سمينار",
//     code: "21_7707060",
//     prof: "مسگري محمد سعدي",
//     units: 2,
//     sessions: [],
//     examDate: "",
//     department: "دانشکده نقشه برداری",
//     capacity: 25,
//     gender: "مختلط"
//   },
// {
//     id: 7707060,
//     name: "سمينار",
//     code: "22_7707060",
//     prof: "لطيفي هومن",
//     units: 2,
//     sessions: [
//       {days: [5], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
//     ],
//     examDate: "",
//     department: "دانشکده نقشه برداری",
//     capacity: 25,
//     gender: "مختلط"
//   },
// {
//     id: 7707060,
//     name: "سمينار",
//     code: "23_7707060",
//     prof: "اساتيد گروه آموزشي",
//     units: 2,
//     sessions: [
//       {days: [5], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
//     ],
//     examDate: "",
//     department: "دانشکده نقشه برداری",
//     capacity: 25,
//     gender: "مختلط"
//   },
// {
//     id: 7707060,
//     name: "سمينار",
//     code: "24_7707060",
//     prof: "عامريان يزدان",
//     units: 2,
//     sessions: [
//       {days: [3], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"}
//     ],
//     examDate: "",
//     department: "دانشکده نقشه برداری",
//     capacity: 25,
//     gender: "مختلط"
//   },
// {
//     id: 7707062,
//     name: "امتحان جامع دكتري 1",
//     code: "21_7707062",
//     prof: "اساتيد گروه آموزشي",
//     units: 0,
//     sessions: [],
//     examDate: "",
//     department: "دانشکده نقشه برداری",
//     capacity: 5,
//     gender: "مختلط"
//   },
// {
//     id: 7707064,
//     name: "پايان نامه",
//     code: "21_7707064",
//     prof: "اساتيد گروه آموزشي",
//     units: 6,
//     sessions: [],
//     examDate: "",
//     department: "دانشکده نقشه برداری",
//     capacity: 90,
//     gender: "مختلط"
//   },
{
    id: 7707070,
    name: "مباني نقشه برداري",
    code: "21_7707070",
    prof: "پيله فروشها پرستو",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 7707071,
    name: "عمليات مباني نقشه برداري",
    code: "21_7707071",
    prof: "صبايي ماسوله جواد",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 17,
    gender: "مختلط"
  },
{
    id: 7707071,
    name: "عمليات مباني نقشه برداري",
    code: "22_7707071",
    prof: "صبايي ماسوله جواد",
    units: 1,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [5], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"},
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 17,
    gender: "مختلط"
  },
{
    id: 7707072,
    name: "مصالح ساختماني",
    code: "21_7707072",
    prof: "زنگانه حامد",
    units: 2,
    sessions: [],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 7707075,
    name: "زيرسازي و روسازي راه",
    code: "21_7707075",
    prof: "خدادادي مجتبي",
    units: 2,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/19 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 7707076,
    name: "روش هاي اجراي ساختمان",
    code: "21_7707076",
    prof: "دادپور محمد حسين",
    units: 2,
    sessions: [],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 7707078,
    name: "تئوري برآورد",
    code: "21_7707078",
    prof: "مشهدي حسينعلي مسعود",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 7707081,
    name: "ژئودزي هندسي",
    code: "21_7707081",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 7707084,
    name: "نقشه برداري ژئودتيك و عمليات",
    code: "21_7707084",
    prof: "وثوقي بهزاد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"},
      {days: [5], start: 15, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 7707086,
    name: "هيدروگرافي",
    code: "21_7707086",
    prof: "جزيرئيان ايرج",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 7707087,
    name: "مباني فتوگرامتري",
    code: "21_7707087",
    prof: "مختارزاده مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/18 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 7707088,
    name: "عمليات مباني فتوگرامتري",
    code: "21_7707088",
    prof: "محمدزنجاني پور الناز",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7707088,
    name: "عمليات مباني فتوگرامتري",
    code: "22_7707088",
    prof: "محمدزنجاني پور الناز",
    units: 1,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7707088,
    name: "عمليات مباني فتوگرامتري",
    code: "24_7707088",
    prof: "محمدزنجاني پور الناز",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7707088,
    name: "عمليات مباني فتوگرامتري",
    code: "25_7707088",
    prof: "محمدزنجاني پور الناز",
    units: 1,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7707090,
    name: "كاربردهاي فتوگرامتري",
    code: "21_7707090",
    prof: "عبادي حميد",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/18 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 7707091,
    name: "عمليات كاربردهاي فتوگرامتري",
    code: "21_7707091",
    prof: "محمدزنجاني پور الناز",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 7707091,
    name: "عمليات كاربردهاي فتوگرامتري",
    code: "22_7707091",
    prof: "محمدزنجاني پور الناز",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 7707092,
    name: "پردازش تصاوير رقومي",
    code: "21_7707092",
    prof: "خصالي الهه",
    units: 3,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 7707094,
    name: "عمليات سنجش از دور",
    code: "21_7707094",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 18,
    gender: "مختلط"
  },
{
    id: 7707094,
    name: "عمليات سنجش از دور",
    code: "22_7707094",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 18,
    gender: "مختلط"
  },
{
    id: 7707100,
    name: "تحليل هاي مكاني",
    code: "21_7707100",
    prof: "ملك محمد رضا",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 7707101,
    name: "عمليات تحليل هاي مكاني",
    code: "21_7707101",
    prof: "سيلاوي طلوع",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 7707101,
    name: "عمليات تحليل هاي مكاني",
    code: "22_7707101",
    prof: "سيلاوي طلوع",
    units: 1,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 7707101,
    name: "عمليات تحليل هاي مكاني",
    code: "23_7707101",
    prof: "سيلاوي طلوع",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 7707101,
    name: "عمليات تحليل هاي مكاني",
    code: "24_7707101",
    prof: "سيلاوي طلوع",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 7707102,
    name: "حد نگاري",
    code: "21_7707102",
    prof: "مسگري محمد سعدي",
    units: 2,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 7707103,
    name: "مديريت پروژه",
    code: "21_7707103",
    prof: "كريمي محمد",
    units: 2,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/18 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 7707105,
    name: "كاربردهاي سيستم اطلاعات مكاني",
    code: "21_7707105",
    prof: "آل شيخ علي اصغر",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/19 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 7707106,
    name: "برنامه ريزي شهري",
    code: "21_7707106",
    prof: "طالعي محمد",
    units: 2,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 7707115,
    name: "ميكروژئودزي",
    code: "21_7707115",
    prof: "وثوقي بهزاد",
    units: 2,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 7707118,
    name: "جزر و مد",
    code: "21_7707118",
    prof: "جزيرئيان ايرج",
    units: 2,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 7728031,
    name: "پروژه نقشه برداري",
    code: "21_7728031",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7728194,
    name: "ژئوديناميك",
    code: "21_7728194",
    prof: "وثوقي بهزاد",
    units: 3,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/18 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 7728195,
    name: "ژئودزي ديناميكي ماهواره اي",
    code: "21_7728195",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 7728196,
    name: "ارتفاع سنجي ماهواره اي",
    code: "21_7728196",
    prof: "جزيرئيان ايرج",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 7728205,
    name: "سنجش از دور با استفاده از سيستم هاي ماهواره اي ناوبري جهاني",
    code: "21_7728205",
    prof: "عامريان يزدان",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 7729013,
    name: "پروژه سنجش از دور",
    code: "21_7729013",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7729013,
    name: "پروژه سنجش از دور",
    code: "22_7729013",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7729013,
    name: "پروژه سنجش از دور",
    code: "23_7729013",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7729013,
    name: "پروژه سنجش از دور",
    code: "24_7729013",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7729013,
    name: "پروژه سنجش از دور",
    code: "25_7729013",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7729013,
    name: "پروژه سنجش از دور",
    code: "26_7729013",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7729013,
    name: "پروژه سنجش از دور",
    code: "27_7729013",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
  {
    id: 7729014,
    name: "پروژه فتوگرامتري",
    code: "21_7729014",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7729014,
    name: "پروژه فتوگرامتري",
    code: "22_7729014",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7729014,
    name: "پروژه فتوگرامتري",
    code: "23_7729014",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7729014,
    name: "پروژه فتوگرامتري",
    code: "24_7729014",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7729130,
    name: "كاربرد رباتيك در مهندسي ژئوماتيك",
    code: "21_7729130",
    prof: "حسيني نوه علي",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 7729132,
    name: "رادارگرامتري",
    code: "21_7729132",
    prof: "خصالي الهه",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 7775005,
    name: "فتوگرامتري فضايي",
    code: "21_7775005",
    prof: "ولدان زوج محمد جواد",
    units: 3,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"},
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/18 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 7775028,
    name: "سنجش از دور مايكروويو",
    code: "21_7775028",
    prof: "صاحبي محمودرضا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 7775031,
    name: "طيف سنجي و پردازش داده هاي ابرطيفي",
    code: "21_7775031",
    prof: "مختارزاده مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 7775037,
    name: "پويش گرهاي ليزري پيشرفته: پردازش و كاربردها",
    code: "21_7775037",
    prof: "محمدزاده علي",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 7775042,
    name: "كاربردهاي اكولوژيكي سنجش ازدوربراي پايش زيست بوم",
    code: "21_7775042",
    prof: "لطيفي هومن",
    units: 3,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 7776004,
    name: "پروژه جي اي اس",
    code: "21_7776004",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7776004,
    name: "پروژه جي اي اس",
    code: "22_7776004",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7776004,
    name: "پروژه جي اي اس",
    code: "23_7776004",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7776004,
    name: "پروژه جي اي اس",
    code: "24_7776004",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
  {
    id: 7776004,
    name: "پروژه جي اي اس",
    code: "25_7776004",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7776004,
    name: "پروژه جي اي اس",
    code: "26_7776004",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7776004,
    name: "پروژه جي اي اس",
    code: "27_7776004",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7776093,
    name: "تصميم گيري چندمعياره مكاني",
    code: "21_7776093",
    prof: "طالعي محمد",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/18 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7776094,
    name: "هستي شناسي مكاني و وب معنايي",
    code: "21_7776094",
    prof: "آل شيخ علي اصغر",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7776096,
    name: "سيستم هاي اطلاعات مكاني فراگير و خدمات مكان مبنا",
    code: "21_7776096",
    prof: "ملك محمد رضا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7776098,
    name: "بهينه سازي مكاني با روش هاي فرا ابتكاري",
    code: "21_7776098",
    prof: "مسگري محمد سعدي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7776101,
    name: "سيستم هاي اطلاعات مكاني و مدل سازي محيطي",
    code: "21_7776101",
    prof: "قائمي‌راد طاهره",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/19 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7776102,
    name: "برنامه ريزي فضايي و آمايش سرزمين",
    code: "21_7776102",
    prof: "كريمي محمد",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7776103,
    name: "داده كاوي مكاني",
    code: "21_7776103",
    prof: "پيله فروشها پرستو",
    units: 3,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 7776004,
    name: "پروژه جي اي اس",
    code: "25_7776004",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7776004,
    name: "پروژه جي اي اس",
    code: "26_7776004",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7776004,
    name: "پروژه جي اي اس",
    code: "27_7776004",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده نقشه برداری",
    capacity: 2,
    gender: "مختلط"
  },
{
    id: 7776093,
    name: "تصميم گيري چندمعياره مكاني",
    code: "21_7776093",
    prof: "طالعي محمد",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/18 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7776094,
    name: "هستي شناسي مكاني و وب معنايي",
    code: "21_7776094",
    prof: "آل شيخ علي اصغر",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7776096,
    name: "سيستم هاي اطلاعات مكاني فراگير و خدمات مكان مبنا",
    code: "21_7776096",
    prof: "ملك محمد رضا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7776098,
    name: "بهينه سازي مكاني با روش هاي فرا ابتكاري",
    code: "21_7776098",
    prof: "مسگري محمد سعدي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7776101,
    name: "سيستم هاي اطلاعات مكاني و مدل سازي محيطي",
    code: "21_7776101",
    prof: "قائمي‌راد طاهره",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/19 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7776102,
    name: "برنامه ريزي فضايي و آمايش سرزمين",
    code: "21_7776102",
    prof: "كريمي محمد",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده نقشه برداری"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 7776103,
    name: "داده كاوي مكاني",
    code: "21_7776103",
    prof: "پيله فروشها پرستو",
    units: 3,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده نقشه برداری",
    capacity: 10,
    gender: "مختلط"
  },
  // Bargh
  {
    id: 1110001,
    name: "رياضيات مهندسي",
    code: "11_1110001",
    prof: "توكلي كاخكي مه سان",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110136,
    name: "مدارهاي الكتريكي 1",
    code: "11_1110136",
    prof: "شمسي حسين",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110136,
    name: "مدارهاي الكتريكي 1",
    code: "12_1110136",
    prof: "كيوان فرد فرزانه",
    units: 3,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110136,
    name: "مدارهاي الكتريكي 1",
    code: "13_1110136",
    prof: "مختاري زهرا",
    units: 3,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110203,
    name: "معادلات ديفرانسيل",
    code: "11_1110203",
    prof: "مختاري زهرا",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110203,
    name: "معادلات ديفرانسيل",
    code: "12_1110203",
    prof: "شاملي محمدعلي",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110203,
    name: "معادلات ديفرانسيل",
    code: "13_1110203",
    prof: "خان كلانتري ركن آبادي سعيد",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110234,
    name: "محاسبات عددي",
    code: "11_1110234",
    prof: "دلير روي فرد رسول",
    units: 2,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110234,
    name: "محاسبات عددي",
    code: "12_1110234",
    prof: "دلير روي فرد رسول",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110235,
    name: "آشنايي با مهندسي برق",
    code: "11_1110235",
    prof: "شاملي محمدعلي و دیگران",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده برق - آمفي تئاتر"}
    ],
    examDate: "1405/04/08 10:30-12:30",
    department: "دانشکده برق",
    capacity: 62,
    gender: "مختلط"
  },
{
    id: 1110235,
    name: "آشنايي با مهندسي برق",
    code: "12_1110235",
    prof: "شاملي محمدعلي و دیگران",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده برق - آمفي تئاتر"}
    ],
    examDate: "1405/04/08 10:30-12:30",
    department: "دانشکده برق",
    capacity: 62,
    gender: "مختلط"
  },
{
    id: 1110235,
    name: "آشنايي با مهندسي برق",
    code: "13_1110235",
    prof: "شاملي محمدعلي و دیگران",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده برق - آمفي تئاتر"}
    ],
    examDate: "1405/04/08 10:30-12:30",
    department: "دانشکده برق",
    capacity: 62,
    gender: "مختلط"
  },
{
    id: 1110236,
    name: "سيستمهاي كنترل خطي",
    code: "11_1110236",
    prof: "خالوزاده حميد",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده برق",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 1110237,
    name: "اصول سيستمهاي مخابراتي",
    code: "11_1110237",
    prof: "سبط محمدعلي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/09 10:30-12:30",
    department: "دانشکده برق",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 1110238,
    name: "تحليل سيستمهاي انرژي الكتريكي 1",
    code: "11_1110238",
    prof: "طولابي محمدرضا",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده برق",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 1110239,
    name: "سيستمهاي ديجيتال 1",
    code: "11_1110239",
    prof: "عليزاده مطلق عراقي محمدصادق",
    units: 3,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110239,
    name: "سيستمهاي ديجيتال 1",
    code: "12_1110239",
    prof: "يارمند روح اله",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110240,
    name: "سيستمهاي ديجيتال 2",
    code: "11_1110240",
    prof: "درماني محمد يوسف",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده برق",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 1110240,
    name: "سيستمهاي ديجيتال 2",
    code: "12_1110240",
    prof: "دلير روي فرد رسول",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده برق",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 1110241,
    name: "مدارهاي الكتريكي 2",
    code: "11_1110241",
    prof: "حسين دخت زهرا",
    units: 2,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده برق",
    capacity: 50,
    gender: "مختلط"
  },
  {
    id: 1110242,
    name: "آزمدارهاي الكتريكي و اندازه گيري",
    code: "11_1110242",
    prof: "اساتيد گروه آموزشي (آقاي چاوشي)",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110242,
    name: "آزمدارهاي الكتريكي و اندازه گيري",
    code: "12_1110242",
    prof: "اساتيد گروه آموزشي (آقاي چاوشي)",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110242,
    name: "آزمدارهاي الكتريكي و اندازه گيري",
    code: "13_1110242",
    prof: "اساتيد گروه آموزشي (آقاي چاوشي)",
    units: 1,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110242,
    name: "آزمدارهاي الكتريكي و اندازه گيري",
    code: "14_1110242",
    prof: "وحيدي علي",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110242,
    name: "آزمدارهاي الكتريكي و اندازه گيري",
    code: "15_1110242",
    prof: "وحيدي علي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110242,
    name: "آزمدارهاي الكتريكي و اندازه گيري",
    code: "16_1110242",
    prof: "اساتيد گروه آموزشي (آقاي صادقي)",
    units: 1,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110242,
    name: "آزمدارهاي الكتريكي و اندازه گيري",
    code: "17_1110242",
    prof: "اساتيد گروه آموزشي (آقاي صادقي)",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110242,
    name: "آزمدارهاي الكتريكي و اندازه گيري",
    code: "18_1110242",
    prof: "اساتيد گروه آموزشي (آقاي چاوشي)",
    units: 1,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110242,
    name: "آزمدارهاي الكتريكي و اندازه گيري",
    code: "19_1110242",
    prof: "كمالي پويان",
    units: 1,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110242,
    name: "آزمدارهاي الكتريكي و اندازه گيري",
    code: "20_1110242",
    prof: "كمالي پويان",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110242,
    name: "آزمدارهاي الكتريكي و اندازه گيري",
    code: "21_1110242",
    prof: "كمالي پويان",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110243,
    name: "آز الكترونيك 1 و 2",
    code: "11_1110243",
    prof: "ميري سيده سميه",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110243,
    name: "آز الكترونيك 1 و 2",
    code: "12_1110243",
    prof: "توكلي سارا",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110243,
    name: "آز الكترونيك 1 و 2",
    code: "13_1110243",
    prof: "توكلي سارا",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110243,
    name: "آز الكترونيك 1 و 2",
    code: "14_1110243",
    prof: "ميري سيده سميه",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110243,
    name: "آز الكترونيك 1 و 2",
    code: "15_1110243",
    prof: "ميري سيده سميه",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110243,
    name: "آز الكترونيك 1 و 2",
    code: "16_1110243",
    prof: "كشاورزافشار مريم",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110243,
    name: "آز الكترونيك 1 و 2",
    code: "17_1110243",
    prof: "اساتيد گروه آموزشي (آقاي خان اف)",
    units: 1,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110243,
    name: "آز الكترونيك 1 و 2",
    code: "18_1110243",
    prof: "اساتيد گروه آموزشي (آقاي خان اف)",
    units: 1,
    sessions: [
      {days: [4], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110243,
    name: "آز الكترونيك 1 و 2",
    code: "19_1110243",
    prof: "اساتيد گروه آموزشي (آقاي كشي زاده)",
    units: 1,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110243,
    name: "آز الكترونيك 1 و 2",
    code: "20_1110243",
    prof: "اساتيد گروه آموزشي (آقاي كشي زاده)",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 1110244,
    name: "آز سيستم هاي كنترل خطي",
    code: "11_1110244",
    prof: "مويدكاظمي حميدرضا",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110244,
    name: "آز سيستم هاي كنترل خطي",
    code: "12_1110244",
    prof: "مويدكاظمي حميدرضا",
    units: 1,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110244,
    name: "آز سيستم هاي كنترل خطي",
    code: "13_1110244",
    prof: "مويدكاظمي حميدرضا",
    units: 1,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110244,
    name: "آز سيستم هاي كنترل خطي",
    code: "14_1110244",
    prof: "مويدكاظمي حميدرضا",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110244,
    name: "آز سيستم هاي كنترل خطي",
    code: "15_1110244",
    prof: "مويدكاظمي حميدرضا",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110244,
    name: "آز سيستم هاي كنترل خطي",
    code: "16_1110244",
    prof: "مويدكاظمي حميدرضا",
    units: 1,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110245,
    name: "آز سيستم هاي ديجيتال 1",
    code: "11_1110245",
    prof: "اساتيد گروه آموزشي (خانم عيسي پور)",
    units: 1,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110245,
    name: "آز سيستم هاي ديجيتال 1",
    code: "12_1110245",
    prof: "اساتيد گروه آموزشي (خانم عيسي پور)",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110245,
    name: "آز سيستم هاي ديجيتال 1",
    code: "13_1110245",
    prof: "اساتيد گروه آموزشي (آقاي فرهادي راد)",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110245,
    name: "آز سيستم هاي ديجيتال 1",
    code: "14_1110245",
    prof: "اساتيد گروه آموزشي (آقاي فرهادي راد)",
    units: 1,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110245,
    name: "آز سيستم هاي ديجيتال 1",
    code: "15_1110245",
    prof: "اساتيد گروه آموزشي (آقاي توحيدلو)",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110245,
    name: "آز سيستم هاي ديجيتال 1",
    code: "16_1110245",
    prof: "اساتيد گروه آموزشي (آقاي توحيدلو)",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110245,
    name: "آز سيستم هاي ديجيتال 1",
    code: "17_1110245",
    prof: "اساتيد گروه آموزشي (آقاي لاري)",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110245,
    name: "آز سيستم هاي ديجيتال 1",
    code: "18_1110245",
    prof: "اساتيد گروه آموزشي (آقاي لاري)",
    units: 1,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1110252,
    name: "كارگاه عمومي",
    code: "11_1110252",
    prof: "ابراهيمي هادي",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده هوافضا"},
      {days: [4], start: 15, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110252,
    name: "كارگاه عمومي",
    code: "12_1110252",
    prof: "ابراهيمي هادي",
    units: 1,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 36,
    gender: "مختلط"
  },
{
    id: 1110253,
    name: "آزماشينهاي الكتريكي 1",
    code: "11_1110253",
    prof: "پاسدار محدثه",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1110253,
    name: "آزماشينهاي الكتريكي 1",
    code: "12_1110253",
    prof: "پاسدار محدثه",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1110253,
    name: "آزماشينهاي الكتريكي 1",
    code: "13_1110253",
    prof: "پاسدار محدثه",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1110253,
    name: "آزماشينهاي الكتريكي 1",
    code: "14_1110253",
    prof: "پاسدار محدثه",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1110253,
    name: "آزماشينهاي الكتريكي 1",
    code: "15_1110253",
    prof: "پاسدار محدثه",
    units: 1,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1110253,
    name: "آزماشينهاي الكتريكي 1",
    code: "16_1110253",
    prof: "پاسدار محدثه",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1110253,
    name: "آزماشينهاي الكتريكي 1",
    code: "17_1110253",
    prof: "پاسدار محدثه",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },{
    id: 1110253,
    name: "آزماشينهاي الكتريكي 1",
    code: "18_1110253",
    prof: "نقدي مرادي علي",
    units: 1,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1110253,
    name: "آزماشينهاي الكتريكي 1",
    code: "19_1110253",
    prof: "نقدي مرادي علي",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1110254,
    name: "ماشينهاي الكتريكي 2",
    code: "11_1110254",
    prof: "عليپور سرابي رامين",
    units: 3,
    sessions: [
      {days: [3], start: 16.5, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده برق",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 1110255,
    name: "ماشينهاي الكتريكي 1",
    code: "11_1110255",
    prof: "عليپور سرابي رامين",
    units: 3,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده برق",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 1110255,
    name: "ماشينهاي الكتريكي 1",
    code: "12_1110255",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده برق",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 1110256,
    name: "سيگنال ها و سيستم ها",
    code: "11_1110256",
    prof: "جمشيدي محمدعلي",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110256,
    name: "سيگنال ها و سيستم ها",
    code: "12_1110256",
    prof: "حيراني نوبري جعفر",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110256,
    name: "سيگنال ها و سيستم ها",
    code: "13_1110256",
    prof: "محبي آشتياني مريم",
    units: 3,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [5], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110257,
    name: "زبان تخصصي برق",
    code: "11_1110257",
    prof: "اساتيد گروه آموزشي (خانم دکتر طوسي)",
    units: 2,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده برق",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 1110257,
    name: "زبان تخصصي برق",
    code: "12_1110257",
    prof: "اساتيد گروه آموزشي (خانم دکتر طوسي)",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده برق",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 1110258,
    name: "الكترومغناطيس مهندسي",
    code: "11_1110258",
    prof: "قطان كاشاني زهرا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده برق",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 1110259,
    name: "الكترونيك 1",
    code: "11_1110259",
    prof: "زندي حسام",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [5], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110260,
    name: "الكترونيك 2",
    code: "11_1110260",
    prof: "حسين دخت زهرا",
    units: 3,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110260,
    name: "الكترونيك 2",
    code: "12_1110260",
    prof: "كرمي پوريا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110260,
    name: "الكترونيك 2",
    code: "13_1110260",
    prof: "نديمي ابراهيم",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1110261,
    name: "احتمال مهندسي",
    code: "11_1110261",
    prof: "اخباري بهاره",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/17 10:30-12:30",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110261,
    name: "احتمال مهندسي",
    code: "12_1110261",
    prof: "حبيبي بسطامي علي",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/17 10:30-12:30",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110262,
    name: "برنامه نويسي كامپيوتر",
    code: "11_1110262",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/19 13:30-16:30",
    department: "دانشکده برق",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 1110273,
    name: "آز فيزيك 1",
    code: "11_1110273",
    prof: "كشاورزافشار مريم",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110273,
    name: "آز فيزيك 1",
    code: "12_1110273",
    prof: "كشاورزافشار مريم",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },{
    id: 1110273,
    name: "آز فيزيك 1",
    code: "13_1110273",
    prof: "اساتيد گروه آموزشي (خانم عباسي)",
    units: 1,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110273,
    name: "آز فيزيك 1",
    code: "14_1110273",
    prof: "اساتيد گروه آموزشي (خانم عباسي)",
    units: 1,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110273,
    name: "آز فيزيك 1",
    code: "15_1110273",
    prof: "اساتيد گروه آموزشي (خانم مير)",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110273,
    name: "آز فيزيك 1",
    code: "16_1110273",
    prof: "اساتيد گروه آموزشي (خانم مير)",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110273,
    name: "آز فيزيك 1",
    code: "17_1110273",
    prof: "كشاورزافشار مريم",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110273,
    name: "آز فيزيك 1",
    code: "18_1110273",
    prof: "اساتيد گروه آموزشي (خانم اكبري)",
    units: 1,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110273,
    name: "آز فيزيك 1",
    code: "19_1110273",
    prof: "اساتيد گروه آموزشي (خانم اكبري)",
    units: 1,
    sessions: [
      {days: [4], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110273,
    name: "آز فيزيك 1",
    code: "20_1110273",
    prof: "كشاورزافشار مريم",
    units: 1,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110273,
    name: "آز فيزيك 1",
    code: "21_1110273",
    prof: "كشاورزافشار مريم",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110273,
    name: "آز فيزيك 1",
    code: "22_1110273",
    prof: "اساتيد گروه آموزشي (آقاي بخت آوري)",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110273,
    name: "آز فيزيك 1",
    code: "23_1110273",
    prof: "اساتيد گروه آموزشي (آقاي بخت آوري)",
    units: 1,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110274,
    name: "آز فيزيك2",
    code: "11_1110274",
    prof: "اساتيد گروه آموزشي (آقاي كشي زاده)",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110274,
    name: "آز فيزيك2",
    code: "12_1110274",
    prof: "اساتيد گروه آموزشي (آقاي كشي زاده)",
    units: 1,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110274,
    name: "آز فيزيك2",
    code: "13_1110274",
    prof: "ياوري بيگوند نرگس",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1110275,
    name: "پروژه",
    code: "11_1110275",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [],
    examDate: "",
    department: "دانشکده برق",
    capacity: 120,
    gender: "مختلط"
  },
{
    id: 1110280,
    name: "مباني بيوالكتريك",
    code: "11_1110280",
    prof: "ولي منصور",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110284,
    name: "سيستم هاي راديولوژي و تصويرگر پزشگي",
    code: "11_1110284",
    prof: "خادم علي",
    units: 2,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110285,
    name: "آز سيگنال هاي حياتي",
    code: "11_1110285",
    prof: "خادم علي",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1110286,
    name: "آز ريزپردازنده",
    code: "11_1110286",
    prof: "يارمند روح اله",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110286,
    name: "آز ريزپردازنده",
    code: "12_1110286",
    prof: "يارمند روح اله",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1110287,
    name: "آز طراحي در سطح سيستم",
    code: "11_1110287",
    prof: "حسيني نژاد محبتي حسين",
    units: 1,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
  {
    id: 1110288,
    name: "كاربيني",
    code: "11_1110288",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110288,
    name: "كاربيني",
    code: "12_1110288",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110288,
    name: "كاربيني",
    code: "13_1110288",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110288,
    name: "كاربيني",
    code: "14_1110288",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110288,
    name: "كاربيني",
    code: "15_1110288",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110288,
    name: "كاربيني",
    code: "16_1110288",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110288,
    name: "كاربيني",
    code: "17_1110288",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110289,
    name: "هوش مصنوعي مقدماتي",
    code: "11_1110289",
    prof: "علياري شوره دلي مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110289,
    name: "هوش مصنوعي مقدماتي",
    code: "12_1110289",
    prof: "تشنه لب محمد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110290,
    name: "رباتيك و بينايي ماشين",
    code: "11_1110290",
    prof: "تقي راد حميد رضا و محمد جواد احمدي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110291,
    name: "يادگيري ماشين مقدماتي",
    code: "11_1110291",
    prof: "نيكوفرد اميرحسين",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/17 10:30-12:30",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1110292,
    name: "آز رباتيك و بينايي ماشين",
    code: "11_1110292",
    prof: "اساتيد گروه آموزشي (محمدجواد احمدي)",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1111107,
    name: "فيزيك مدرن",
    code: "11_1111107",
    prof: "اكبري برومند فرهاد",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1111109,
    name: "آزالكترونيك صنعتي",
    code: "11_1111109",
    prof: "اساتيد گروه آموزشي (آقاي گلابي)",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1111109,
    name: "آزالكترونيك صنعتي",
    code: "12_1111109",
    prof: "اساتيد گروه آموزشي (خانم نادي)",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1111109,
    name: "آزالكترونيك صنعتي",
    code: "13_1111109",
    prof: "اساتيد گروه آموزشي (آقاي گلابي)",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1111109,
    name: "آزالكترونيك صنعتي",
    code: "14_1111109",
    prof: "اساتيد گروه آموزشي (خانم نادي)",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1111110,
    name: "الكترونيك 3",
    code: "11_1111110",
    prof: "احسانيان مفرد مهدي",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1111111,
    name: "آزالكترونيك 3",
    code: "11_1111111",
    prof: "ميري سيده سميه",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1111178,
    name: "مدارهاي پالس و ديجيتال",
    code: "11_1111178",
    prof: "شمسي حسين",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1111179,
    name: "آز مدارهاي پالس و ديجيتال",
    code: "11_1111179",
    prof: "ميري سيده سميه",
    units: 1,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
  {
    id: 1111179,
    name: "آز مدارهاي پالس و ديجيتال",
    code: "12_1111179",
    prof: "ميري سيده سميه",
    units: 1,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1111179,
    name: "آز مدارهاي پالس و ديجيتال",
    code: "13_1111179",
    prof: "ميري سيده سميه",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1111186,
    name: "آزمايشگاه ابزارهاي طراحي به كمك كامپيوتر",
    code: "11_1111186",
    prof: "حسيني نژاد محبتي حسين",
    units: 1,
    sessions: [
      {days: [3], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1111194,
    name: "مدارهاي مجتمع فركانس راديويي (RFIC)",
    code: "11_1111194",
    prof: "كرمي پوريا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1111195,
    name: "مبدل هاي داده مجتمع (A/D , D/A)",
    code: "11_1111195",
    prof: "احسانيان مفرد مهدي",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1111202,
    name: "شبكه هاي انتقال داده",
    code: "11_1111202",
    prof: "درماني محمد يوسف",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1111203,
    name: "مدارهاي ASIC/FPGA",
    code: "11_1111203",
    prof: "حسيني نژاد محبتي حسين",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1111218,
    name: "الكترونيك ارگانيكي",
    code: "11_1111218",
    prof: "اكبري برومند فرهاد",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1111219,
    name: "شبيه سازي افزاره هاي نيم رسانا",
    code: "11_1111219",
    prof: "نديمي ابراهيم",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [5], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1111223,
    name: "مشخصه يابي مواد و افزاره هاي نيم رسانا",
    code: "11_1111223",
    prof: "صالحي عليرضا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1111227,
    name: "الكترونيك نوري",
    code: "11_1111227",
    prof: "زندي حسام",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1111228,
    name: "سمينار",
    code: "11_1111228",
    prof: "احسانيان مفرد مهدي",
    units: 2,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1112028,
    name: "اقتصادمهندسي",
    code: "11_1112028",
    prof: "عليزاده مطلق عراقي محمدصادق",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1112028,
    name: "اقتصادمهندسي",
    code: "12_1112028",
    prof: "اساتيد گروه آموزشي (آقاي دکتر پايداري)",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1112030,
    name: "طرح پست هاي فشارقوي وپروژه",
    code: "11_1112030",
    prof: "اكبري ازيراني اصغر",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1112034,
    name: "كارگاه برق",
    code: "11_1112034",
    prof: "اساتيد گروه آموزشي (آقاي فردوسي گلستان)",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1112034,
    name: "كارگاه برق",
    code: "12_1112034",
    prof: "اساتيد گروه آموزشي (آقاي فردوسي گلستان)",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1112034,
    name: "كارگاه برق",
    code: "13_1112034",
    prof: "اساتيد گروه آموزشي (آقاي فردوسي گلستان)",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1112034,
    name: "كارگاه برق",
    code: "14_1112034",
    prof: "فريدونيان عليرضا",
    units: 1,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1112034,
    name: "كارگاه برق",
    code: "15_1112034",
    prof: "اساتيد گروه آموزشي (آقاي فردوسي گلستان)",
    units: 1,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1112034,
    name: "كارگاه برق",
    code: "16_1112034",
    prof: "اساتيد گروه آموزشي (آقاي فردوسي گلستان)",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1112034,
    name: "كارگاه برق",
    code: "17_1112034",
    prof: "اساتيد گروه آموزشي (آقاي فردوسي گلستان)",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1112034,
    name: "كارگاه برق",
    code: "18_1112034",
    prof: "اساتيد گروه آموزشي (آقاي ميربراتي)",
    units: 1,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1112040,
    name: "آزماشينهاي الكتريكي 2",
    code: "11_1112040",
    prof: "نظري مراشي عباس",
    units: 1,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1112043,
    name: "الكترونيك صنعتي",
    code: "11_1112043",
    prof: "محسن زاده هدش صادق",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1112051,
    name: "آزعايقهاوفشارقوي",
    code: "11_1112051",
    prof: "اساتيد گروه آموزشي (آقاي سبارشاد)",
    units: 1,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1112063,
    name: "تاسيسات الكتريكي",
    code: "11_1112063",
    prof: "فريدونيان عليرضا",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1112067,
    name: "آز سيستم هاي قدرت",
    code: "11_1112067",
    prof: "اساتيد گروه آموزشي (آقاي محمد فردوسي گلستان)",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1112185,
    name: "بهره برداري ازسيستم هاي قدرت پيشرفته",
    code: "11_1112185",
    prof: "امرايي تورج",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/16 13:30-16:30",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1112189,
    name: "بررسي وشناخت انرژي هاي نو",
    code: "11_1112189",
    prof: "طولابي محمدرضا",
    units: 3,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1112191,
    name: "توزيع انرژي الكتريكي",
    code: "11_1112191",
    prof: "فريدونيان عليرضا",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/09 10:30-12:30",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1112201,
    name: "سيستم هاي قدرت انعطاف پذير",
    code: "11_1112201",
    prof: "توكلي بينا محمد",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1112202,
    name: "پايش وضعيت تجهيزات فشارقوي",
    code: "11_1112202",
    prof: "اكبري ازيراني اصغر",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/07 10:30-12:30",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1112204,
    name: "مهندسي توان پالسي",
    code: "11_1112204",
    prof: "محسن زاده هدش صادق",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/14 13:30-16:30",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1112205,
    name: "سمينار",
    code: "11_1112205",
    prof: "توكلي بينا محمد",
    units: 2,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1112212,
    name: "تئوري جامع ماشين الكتريكي",
    code: "11_1112212",
    prof: "عليپور سرابي رامين",
    units: 3,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/17 10:30-12:30",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1112216,
    name: "اصول سيستم هاي محركه الكتريكي",
    code: "11_1112216",
    prof: "عباس زاده كريم",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده برق",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 1113009,
    name: "ميدانهاوامواج",
    code: "11_1113009",
    prof: "قطان كاشاني زهرا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1113032,
    name: "آزآنتن",
    code: "11_1113032",
    prof: "احمدي سيدآرش",
    units: 1,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1113041,
    name: "مدارهاي مخابراتي",
    code: "11_1113041",
    prof: "احمدي سيدآرش",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1113042,
    name: "آزمدارهاي مخابراتي",
    code: "11_1113042",
    prof: "اساتيد گروه آموزشي (آقاي توحيد نعيمي)",
    units: 1,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1113229,
    name: "ريز موج",
    code: "11_1113229",
    prof: "پاكيزه توكل",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/21 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1113231,
    name: "آز مخابرات ديجيتال",
    code: "11_1113231",
    prof: "اساتيد گروه آموزشي (خانم آليا)",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 1113232,
    name: "آز پردازش سيگنالهاي ديجيتال",
    code: "11_1113232",
    prof: "جمشيدي محمدعلي",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 1113233,
    name: "آز ريز موج",
    code: "11_1113233",
    prof: "اساتيد گروه آموزشي (خانم صالحي يا آقاي علي نژاد باويل)",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1113233,
    name: "آز ريز موج",
    code: "12_1113233",
    prof: "اساتيد گروه آموزشي (خانم صالحي يا آقاي علي نژاد باويل)",
    units: 1,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1113250,
    name: "مخابرات بي سيم و سيار",
    code: "11_1113250",
    prof: "محامدپور كمال",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده برق",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1113255,
    name: "نانواپتيك و نانوفوتونيك",
    code: "11_1113255",
    prof: "پاكيزه توكل",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1113259,
    name: "ريز موج وآنتن",
    code: "11_1113259",
    prof: "پاكيزه توكل و علي اكبريان هادي",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1113262,
    name: "آنتن 2",
    code: "11_1113262",
    prof: "علي اكبريان هادي",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/17 13:30-16:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1113263,
    name: "فيبرنوري",
    code: "11_1113263",
    prof: "شاملي محمدعلي",
    units: 3,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1113271,
    name: "سمينار",
    code: "11_1113271",
    prof: "صادقزاده شيخان گفشه رمضانعلي",
    units: 2,
    sessions: [
      {days: [4], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1113275,
    name: "طراحي شبكه هاي راديويي",
    code: "11_1113275",
    prof: "صادقزاده شيخان گفشه رمضانعلي",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1113278,
    name: "مايكروويو2",
    code: "11_1113278",
    prof: "احمدي سيدآرش",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1113291,
    name: "مخابرات سلولي",
    code: "11_1113291",
    prof: "محامدپور كمال",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1113292,
    name: "پردازش سيگنال ديجيتال",
    code: "11_1113292",
    prof: "محامدپور كمال",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1113294,
    name: "تئوري پيشرفته مخابرات",
    code: "11_1113294",
    prof: "حبيبي بسطامي علي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1113298,
    name: "تئوري تخمين",
    code: "11_1113298",
    prof: "سبط محمدعلي",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1113299,
    name: "روشهاي عددي بهينه سازي",
    code: "11_1113299",
    prof: "اخباري بهاره",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1113301,
    name: "شبكه هاي مخابراتي",
    code: "11_1113301",
    prof: "جمشيدي محمدعلي",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1115012,
    name: "كنترل صنعتي",
    code: "11_1115012",
    prof: "توسلي بابك",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1115061,
    name: "كنترل مدرن",
    code: "11_1115061",
    prof: "اساتيد گروه آموزشي (آقاي دكتر رمضاني مقدم)",
    units: 3,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1115093,
    name: "آزمايشگاه كنترل فرآيندهاي صنعتي",
    code: "11_1115093",
    prof: "اساتيد گروه آموزشي (آقاي كهريزي يا آقاي ميربراتي)",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1115093,
    name: "آزمايشگاه كنترل فرآيندهاي صنعتي",
    code: "12_1115093",
    prof: "اساتيد گروه آموزشي (آقاي كهريزي يا آقاي ميربراتي)",
    units: 1,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1115093,
    name: "آزمايشگاه كنترل فرآيندهاي صنعتي",
    code: "13_1115093",
    prof: "اساتيد گروه آموزشي (آقاي كهريزي يا آقاي ميربراتي)",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1115097,
    name: "آزمايشگاه PLC",
    code: "11_1115097",
    prof: "حسن نسب سياوش",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
]
