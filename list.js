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
  {
    id: 1115097,
    name: "آزمايشگاه PLC",
    code: "12_1115097",
    prof: "حسن نسب سياوش",
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
    id: 1115097,
    name: "آزمايشگاه PLC",
    code: "13_1115097",
    prof: "حسن نسب سياوش",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1115097,
    name: "آزمايشگاه PLC",
    code: "14_1115097",
    prof: "حسن نسب سياوش",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1115099,
    name: "آزمايشگاه ابزاردقيق",
    code: "11_1115099",
    prof: "اساتيد گروه آموزشي (آقاي چاوشي)",
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
    id: 1115099,
    name: "آزمايشگاه ابزاردقيق",
    code: "12_1115099",
    prof: "اساتيد گروه آموزشي (آقاي چاوشي)",
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
    id: 1115099,
    name: "آزمايشگاه ابزاردقيق",
    code: "13_1115099",
    prof: "اساتيد گروه آموزشي (آقاي چاوشي)",
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
    id: 1115099,
    name: "آزمايشگاه ابزاردقيق",
    code: "14_1115099",
    prof: "اساتيد گروه آموزشي (آقاي اميني)",
    units: 1,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1115119,
    name: "جبر خطي",
    code: "11_1115119",
    prof: "توكلي كاخكي مه سان",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [5], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1115120,
    name: "آز كنترل ديجيتال",
    code: "11_1115120",
    prof: "اساتيد گروه آموزشي (آقاي محمد صادق دستجردي)",
    units: 1,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1115120,
    name: "آز كنترل ديجيتال",
    code: "12_1115120",
    prof: "اساتيد گروه آموزشي (آقاي محمد صادق دستجردي)",
    units: 1,
    sessions: [
      {days: [3], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 1115122,
    name: "مباني مكاترونيك",
    code: "11_1115122",
    prof: "دلربايي مهدي",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1115129,
    name: "يادگيري ژرف",
    code: "11_1115129",
    prof: "تشنه لب محمد",
    units: 3,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/09 13:30-16:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1115133,
    name: "كنترل غيرخطي",
    code: "11_1115133",
    prof: "حيراني نوبري جعفر",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1115137,
    name: "كنترل فرآيندهاي تصادفي",
    code: "11_1115137",
    prof: "خالوزاده حميد",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1115141,
    name: "نظريه بازي ها",
    code: "11_1115141",
    prof: "نيكوفرد اميرحسين",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1115147,
    name: "كنترل بهينه",
    code: "11_1115147",
    prof: "توسلي بابك",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/06 13:30-16:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1115148,
    name: "سمينار",
    code: "11_1115148",
    prof: "توسلي بابك",
    units: 2,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1115154,
    name: "مباحث ويژه.سيستم هاي كنترل داده- راند",
    code: "11_1115154",
    prof: "خاكي صديق علي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1115158,
    name: "مهندسي آناليز ريسك و عدم قطعيت",
    code: "11_1115158",
    prof: "اساتيد گروه آموزشي (آقاي دكتر تحسيري)",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1116035,
    name: "پردازش سيگنالهاي بيولوژيكي",
    code: "11_1116035",
    prof: "محبي آشتياني مريم",
    units: 3,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1116037,
    name: "سمينار",
    code: "11_1116037",
    prof: "ابريشمي مقدم حميد",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1116042,
    name: "پردازش سيگنالهاي تصويري",
    code: "11_1116042",
    prof: "ابريشمي مقدم حميد",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1116079,
    name: "پردازش صوت درتشخيص پزشكي",
    code: "11_1116079",
    prof: "ولي منصور",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده برق"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/15 13:30-16:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 1116080,
    name: "سيستم هاي تصويربرداري كاركردي مغز",
    code: "11_1116080",
    prof: "خادم علي",
    units: 3,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده برق"},
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/09 10:30-12:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1116083,
    name: "فيزيولوژي",
    code: "11_1116083",
    prof: "اساتيد گروه آموزشي (خانم دكتر قلندري شمامي)",
    units: 3,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1116085,
    name: "آمار زيستي",
    code: "11_1116085",
    prof: "ابريشمي مقدم حميد",
    units: 2,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/17 13:30-16:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1116091,
    name: "تصويربرداري تشديد مغناطيسي",
    code: "11_1116091",
    prof: "كيوان فرد فرزانه",
    units: 3,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [5], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1116092,
    name: "كارآفريني در مهندسي پزشكي",
    code: "11_1116092",
    prof: "اساتيد گروه آموزشي (آقاي دكتر سلامت)",
    units: 2,
    sessions: [
      {days: [5], start: 16.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده برق",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 1117008,
    name: "سيستم هاي بيو مكاترونيك",
    code: "11_1117008",
    prof: "دلربايي مهدي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1117014,
    name: "مكاترونيك",
    code: "11_1117014",
    prof: "خان كلانتري ركن آبادي سعيد",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1117015,
    name: "مباني مكاترونيك 2",
    code: "11_1117015",
    prof: "اساتيد گروه آموزشي (آقاي دكتر خليل پور)",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده برق"},
      {days: [4], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده برق",
    capacity: 15,
    gender: "مختلط"
  },
  //havafaza
  {
    id: 8880004,
    name: "سمينار",
    code: "81_8880004",
    prof: "مظفري علي",
    units: 2,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "كلاس 203"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 8880018,
    name: "نقشه كشي صنعتي 2",
    code: "81_8880018",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "كلاس 211"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 211"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 8880018,
    name: "نقشه كشي صنعتي 2",
    code: "82_8880018",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "كلاس 211"},
      {days: [3], start: 15, duration: 1.5, location: "كلاس 211"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 8880019,
    name: "استاتيك",
    code: "81_8880019",
    prof: "نوريان محمدعلي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "سالن"},
      {days: [5], start: 9, duration: 1.5, location: "سالن"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880019,
    name: "استاتيك",
    code: "82_8880019",
    prof: "ايراني سعيد",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 210"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس 210"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880020,
    name: "رياضيات مهندسي",
    code: "81_8880020",
    prof: "جعفري ندوشن مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 203"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس 203"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880020,
    name: "رياضيات مهندسي",
    code: "82_8880020",
    prof: "اساتيد گروه آموزشي (دكتر برزميني)",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس 204"},
      {days: [5], start: 15, duration: 1.5, location: "كلاس 204"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880021,
    name: "مكانيك سيالات",
    code: "81_8880021",
    prof: "ابراهيمي رضا",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 207"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس 207"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880021,
    name: "مكانيك سيالات",
    code: "82_8880021",
    prof: "اعظم پور محمد هادي",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 203"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس 203"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880022,
    name: "علم مواد",
    code: "81_8880022",
    prof: "خراساني رضا",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس 210"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس 210"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880022,
    name: "علم مواد",
    code: "82_8880022",
    prof: "نوريان محمدعلي",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس 207"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس 207"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880025,
    name: "آلگوريتمها و برنامه سازي كامپيوتر",
    code: "81_8880025",
    prof: "اساتيد گروه آموزشي (دكتر چيت ساز)",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس 203"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس 203"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 8880026,
    name: "ترموديناميك 1",
    code: "81_8880026",
    prof: "مهدوي مقدم حسين",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "سالن"},
      {days: [4], start: 10.5, duration: 2, location: "سالن"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880026,
    name: "ترموديناميك 1",
    code: "82_8880026",
    prof: "شيخ الاسلام نوري سيد مهدي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس 203"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس 203"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880028,
    name: "كنترل اتوماتيك",
    code: "81_8880028",
    prof: "طايفي نصرآبادي مرتضي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس 203"},
      {days: [5], start: 15, duration: 1.5, location: "كلاس 203"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 8880031,
    name: "انتقال حرارت",
    code: "81_8880031",
    prof: "كريمي مزرعه شاهي حسن",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "سالن"},
      {days: [4], start: 9, duration: 1.5, location: "سالن"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 8880036,
    name: "آز مكانيك سيالات",
    code: "81_8880036",
    prof: "شيخ الاسلام نوري سيد مهدي",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه مكانيك سيالات، مجتمع آزمايشگاهي و كارگاهي دانشكده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 8880036,
    name: "آز مكانيك سيالات",
    code: "82_8880036",
    prof: "شيخ الاسلام نوري سيد مهدي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه مكانيك سيالات، مجتمع آزمايشگاهي و كارگاهي دانشكده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 8880037,
    name: "طراحي اجزاء 1",
    code: "81_8880037",
    prof: "مظفري علي",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "سالن"},
      {days: [5], start: 10.5, duration: 2, location: "سالن"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880037,
    name: "طراحي اجزاء 1",
    code: "82_8880037",
    prof: "ذاكري مهناز",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 203"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس 203"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
  {
    id: 8880038,
    name: "آز مقاومت مصالح",
    code: "81_8880038",
    prof: "ذاكري مهناز",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "كلاس 205"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8880038,
    name: "آز مقاومت مصالح",
    code: "82_8880038",
    prof: "ذاكري مهناز",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "سالن"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8880047,
    name: "آز آئروديناميك 1",
    code: "81_8880047",
    prof: "پوريوسفي غلامحسين",
    units: 1,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "آزمايشگاه آيروديناميك، دانشكده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 8880047,
    name: "آز آئروديناميك 1",
    code: "82_8880047",
    prof: "پوريوسفي غلامحسين",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "آزمايشگاه آيروديناميك، دانشكده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 8880047,
    name: "آز آئروديناميك 1",
    code: "83_8880047",
    prof: "پوريوسفي غلامحسين",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "آزمايشگاه آيروديناميك، دانشكده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 6,
    gender: "مختلط"
  },
{
    id: 8880049,
    name: "كارگاه ورقكاري وجوشكاري درصنايع هوائي",
    code: "81_8880049",
    prof: "نيكخواه امير علي",
    units: 1,
    sessions: [
      {days: [6], start: 7.5, duration: 1.5, location: "دانشکده هوافضا"},
      {days: [6], start: 9, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 8880049,
    name: "كارگاه ورقكاري وجوشكاري درصنايع هوائي",
    code: "82_8880049",
    prof: "نيكخواه امير علي",
    units: 1,
    sessions: [
      {days: [6], start: 10.5, duration: 2, location: "دانشکده هوافضا"},
      {days: [6], start: 13.5, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 8880049,
    name: "كارگاه ورقكاري وجوشكاري درصنايع هوائي",
    code: "83_8880049",
    prof: "نيكخواه امير علي",
    units: 1,
    sessions: [
      {days: [6], start: 15, duration: 1.5, location: "دانشکده هوافضا"},
      {days: [6], start: 16.5, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 8880050,
    name: "زبان تخصصي مهندسي هوافضا",
    code: "81_8880050",
    prof: "اساتيد گروه آموزشي (دكتر نظام آبادي)",
    units: 2,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 210"}
    ],
    examDate: "1405/04/21 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 8880059,
    name: "محاسبات عددي",
    code: "81_8880059",
    prof: "اعظم پور محمد هادي",
    units: 2,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "كلاس 203"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880059,
    name: "محاسبات عددي",
    code: "82_8880059",
    prof: "پوريوسفي غلامحسين",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "كلاس 203"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880060,
    name: "مكانيك پرواز 1",
    code: "81_8880060",
    prof: "نيكخواه امير علي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس 204"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس 204"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880060,
    name: "مكانيك پرواز 1",
    code: "82_8880060",
    prof: "خوشنود عبدالمجيد",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس 207"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس 210"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880066,
    name: "پروژه",
    code: "80_8880066",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 8880068,
    name: "كارگاه موتور_بدنه وسيستمهاي هواپيما",
    code: "81_8880068",
    prof: "كريمي مزرعه شاهي حسن",
    units: 2,
    sessions: [
      {days: [6], start: 7.5, duration: 1.5, location: "دانشکده هوافضا"},
      {days: [6], start: 9, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 8880068,
    name: "كارگاه موتور_بدنه وسيستمهاي هواپيما",
    code: "82_8880068",
    prof: "كريمي مزرعه شاهي حسن",
    units: 2,
    sessions: [
      {days: [6], start: 10.5, duration: 2, location: "دانشکده هوافضا"},
      {days: [6], start: 13.5, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 8880068,
    name: "كارگاه موتور_بدنه وسيستمهاي هواپيما",
    code: "83_8880068",
    prof: "كريمي مزرعه شاهي حسن",
    units: 2,
    sessions: [
      {days: [6], start: 15, duration: 1.5, location: "دانشکده هوافضا"},
      {days: [6], start: 16.5, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 8880081,
    name: "سوخت واحتراق",
    code: "81_8880081",
    prof: "مهدوي مقدم حسين",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "سالن"},
      {days: [4], start: 15, duration: 1.5, location: "سالن"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 8880082,
    name: "آئروديناميك 2",
    code: "81_8880082",
    prof: "فتحعلي ماني",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "سالن"},
      {days: [4], start: 13.5, duration: 1.5, location: "سالن"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880082,
    name: "آئروديناميك 2",
    code: "82_8880082",
    prof: "اعظم پور محمد هادي",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس 207"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس 207"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },{
    id: 8880084,
    name: "كارگاه ابزاردقيق واندازه گيري درهواپيما",
    code: "81_8880084",
    prof: "نيكخواه امير علي",
    units: 2,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "كلاس 207"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 207"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 8880084,
    name: "كارگاه ابزاردقيق واندازه گيري درهواپيما",
    code: "82_8880084",
    prof: "نيكخواه امير علي",
    units: 2,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "كلاس 207"},
      {days: [3], start: 15, duration: 1.5, location: "كلاس 207"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 8880084,
    name: "كارگاه ابزاردقيق واندازه گيري درهواپيما",
    code: "83_8880084",
    prof: "اساتيد گروه آموزشي (مهندس خانمحمدي نيماوري)",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس 205"},
      {days: [2], start: 15, duration: 1.5, location: "كلاس 205"}
    ],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 8880085,
    name: "سمينار 1",
    code: "81_8880085",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 8880086,
    name: "سمينار 2",
    code: "81_8880086",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 8880097,
    name: "روش هاي تجربي درآئروديناميك",
    code: "81_8880097",
    prof: "پوريوسفي غلامحسين",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس 203"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس 203"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 8880102,
    name: "سيستم هاي اتوماتيك درفضا",
    code: "81_8880102",
    prof: "با صحبت نوين زاد عليرضا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 207"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس 207"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 8880110,
    name: "طراحي،كنترل وكاربردسيستم هاي ماهواره اي",
    code: "81_8880110",
    prof: "چيني فروشان محمد",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس 207"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس 207"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 8880126,
    name: "رساله دكترا",
    code: "81_8880126",
    prof: "اساتيد گروه آموزشي",
    units: 24,
    sessions: [],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 8880132,
    name: "مكانيك مدارهاي فضايي",
    code: "81_8880132",
    prof: "مير شمس مهران",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: ""},
      {days: [5], start: 9, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880132,
    name: "مكانيك مدارهاي فضايي",
    code: "82_8880132",
    prof: "چيني فروشان محمد",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 204"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس 204"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 22,
    gender: "مختلط"
  },
{
    id: 8880134,
    name: "رياضيات پيشرفته 1",
    code: "81_8880134",
    prof: "اساتيد گروه آموزشي (دكتر خوئي)",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس 201، ساختمان اداري دانشكده هوافضا"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس 201، ساختمان اداري دانشكده هوافضا"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 8880141,
    name: "دفاع از پيشنهاد رساله دكتري",
    code: "81_8880141",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 5,
    gender: "مختلط"
  },
{
    id: 8880142,
    name: "دفاع مجدد از پيشنهاد رساله دكتري",
    code: "81_8880142",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 5,
    gender: "مختلط"
  },
{
    id: 8880143,
    name: "امتحان جامع دكتري 1",
    code: "81_8880143",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 8880144,
    name: "امتحان جامع دكتري 2",
    code: "81_8880144",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 5,
    gender: "مختلط"
  },{
    id: 8880152,
    name: "پايان نامه",
    code: "81_8880152",
    prof: "اساتيد گروه آموزشي",
    units: 6,
    sessions: [],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 8880153,
    name: "دستيار آموزشي",
    code: "81_8880153",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده هوافضا",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 8882012,
    name: "ديناميك سيالات عددي 1",
    code: "82_8882012",
    prof: "علي صادقي آراني حامد",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس 207"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس 207"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8882016,
    name: "سوخت و احتراق پيشرفته 1",
    code: "82_8882016",
    prof: "ابراهيمي رضا",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس 204"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس 204"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8882017,
    name: "اصول جلوبرنده پيشرفته",
    code: "82_8882017",
    prof: "مهدوي مقدم حسين",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "سالن"},
      {days: [4], start: 7.5, duration: 1.5, location: "سالن"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8882035,
    name: "توربولانس",
    code: "82_8882035",
    prof: "اساتيد گروه آموزشي (دكتر خوئي)",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 201، ساختمان اداري دانشكده هوافضا"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس 201، ساختمان اداري دانشكده هوافضا"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8882041,
    name: "ديناميك سيالات عددي 2",
    code: "82_8882041",
    prof: "اعظم پور محمد هادي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "سايت كامپيوتر هوافضا"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس 207"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8884008,
    name: "ديناميك پروازو كنترل فضا پيما",
    code: "84_8884008",
    prof: "با صحبت نوين زاد عليرضا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 207"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس 207"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8884014,
    name: "مكانيك مدار پيشرفته",
    code: "84_8884014",
    prof: "جعفري ندوشن مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس 201، ساختمان اداري دانشكده هوافضا"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس 201، ساختمان اداري دانشكده هوافضا"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8884024,
    name: "طراحي سيستمي فضاپيما",
    code: "84_8884024",
    prof: "مير شمس مهران",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: ""},
      {days: [5], start: 10.5, duration: 2, location: ""}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8884043,
    name: "كنترل جريان سيال",
    code: "84_8884043",
    prof: "شيخ الاسلام نوري سيد مهدي",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس 201، ساختمان اداري دانشكده هوافضا"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس 201، ساختمان اداري دانشكده هوافضا"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8884058,
    name: "تئوري كنترل بهينه",
    code: "84_8884058",
    prof: "روشني يان جعفر",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 204"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس 204"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },{
    id: 8884060,
    name: "هدايت و ناوبري 1",
    code: "84_8884060",
    prof: "روشني يان جعفر و نيكخواه امير علي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس 204"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس 204"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8884075,
    name: "شناسايي سيستم و تخمين پارامترهاي پرواز",
    code: "84_8884075",
    prof: "خوشنود عبدالمجيد",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس 201، ساختمان اداري دانشكده هوافضا"},
      {days: [5], start: 15, duration: 1.5, location: "كلاس 201، ساختمان اداري دانشكده هوافضا"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8884079,
    name: "طراحي سيستم هاي كنترلي",
    code: "84_8884079",
    prof: "طايفي نصرآبادي مرتضي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 205"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس 205"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8884080,
    name: "تعيين مدار و وضعيت",
    code: "84_8884080",
    prof: "چيني فروشان محمد",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "سالن"},
      {days: [5], start: 15, duration: 1.5, location: "سالن"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8895009,
    name: "روشهاي اجزا محدود",
    code: "95_8895009",
    prof: "خراساني رضا",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس 203"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس 203"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8895015,
    name: "آئروالاستيسيته",
    code: "95_8895015",
    prof: "ايراني سعيد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 205"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس 205"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8895028,
    name: "مكانيك مواد مركب",
    code: "95_8895028",
    prof: "ذاكري مهناز",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 201، ساختمان اداري دانشكده هوافضا"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس 201، ساختمان اداري دانشكده هوافضا"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8895029,
    name: "مكانيك محيط هاي پيوسته 1",
    code: "95_8895029",
    prof: "ابراهيمي رضا",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "كلاس 204"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس 204"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 8895033,
    name: "آناليز و تست مودال",
    code: "95_8895033",
    prof: "نوريان محمدعلي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس 207"},
      {days: [5], start: 15, duration: 1.5, location: "كلاس 207"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
//fizik
{
    id: 4210001,
    name: "سمينار",
    code: "41_4210001",
    prof: "رحماني فائزه",
    units: 2,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "حياط دانشكده 01"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4210001,
    name: "سمينار",
    code: "42_4210001",
    prof: "مشكوري مهدي",
    units: 2,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "كلاس 211"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4210001,
    name: "سمينار",
    code: "43_4210001",
    prof: "افضلي رضا",
    units: 2,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 206"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4210001,
    name: "سمينار",
    code: "44_4210001",
    prof: "حاتمي محمد محسن",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 4210006,
    name: "دفاع از پيشنهاد رساله دكتري",
    code: "41_4210006",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4210008,
    name: "امتحان جامع دكتري 1",
    code: "41_4210008",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4210013,
    name: "الكترومغناطيس 1",
    code: "41_4210013",
    prof: "تقي زاده فيروزجائي جواد",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 212"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس 212"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 4210015,
    name: "آز فيزيك 4",
    code: "41_4210015",
    prof: "مشحون سارا",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210016,
    name: "كارگاه ماشين افزار",
    code: "41_4210016",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "پرديش شهيد رضايي نژاد - كارگاه هاي دانشكده مكانيك"},
      {days: [3], start: 16.5, duration: 1.5, location: "پرديش شهيد رضايي نژاد - كارگاه هاي دانشكده مكانيك"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 4210016,
    name: "كارگاه ماشين افزار",
    code: "42_4210016",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "پرديش شهيد رضايي نژاد - كارگاه هاي دانشكده مكانيك"},
      {days: [4], start: 15, duration: 1.5, location: "پرديش شهيد رضايي نژاد - كارگاه هاي دانشكده مكانيك"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 4210019,
    name: "ترموديناميك و مكانيك آماري 2",
    code: "41_4210019",
    prof: "نوروزي فر احسان",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 212"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 212"}
    ],
    examDate: "1405/04/07 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
  {
    id: 4210020,
    name: "كارگاه الكتروتكنيك",
    code: "41_4210020",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 4210020,
    name: "كارگاه الكتروتكنيك",
    code: "42_4210020",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 4210021,
    name: "مكانيك كوانتمي 2",
    code: "41_4210021",
    prof: "هدايتي خليل آباد هادي",
    units: 3,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس 202"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 4210022,
    name: "برنامه نويسي كامپيوتر",
    code: "41_4210022",
    prof: "صداقت مهسا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 212"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس 212"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 4210024,
    name: "نظريه نسبيت",
    code: "41_4210024",
    prof: "انصاري فرد محمد",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس 212"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس 212"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 4210025,
    name: "امواج و ارتعاشات",
    code: "41_4210025",
    prof: "افشاري محمد مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس 211"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس 211"}
    ],
    examDate: "1405/04/08 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 4210027,
    name: "مكانيك شاره ها",
    code: "41_4210027",
    prof: "نصيري راد امين",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "كلاس 202"},
      {days: [3], start: 15, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 4210030,
    name: "محاسبات عددي",
    code: "41_4210030",
    prof: "ژوليده حقيقي محمد حسين",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس 202"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/08 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 4210034,
    name: "محاسبات و اطلاعات كوانتمي",
    code: "41_4210034",
    prof: "تقي زاده فيروزجائي جواد",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس 211"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس 211"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 4210044,
    name: "پايان نامه",
    code: "41_4210044",
    prof: "اساتيد گروه آموزشي",
    units: 6,
    sessions: [],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 100,
    gender: "مختلط"
  },
{
    id: 4210051,
    name: "رساله دكترا",
    code: "41_4210051",
    prof: "اساتيد گروه آموزشي",
    units: 24,
    sessions: [],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 4210070,
    name: "مكانيك آماري پيشرفته 1",
    code: "41_4210070",
    prof: "حمزه پور حسين",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "حياط دانشكده 01"},
      {days: [4], start: 13.5, duration: 1.5, location: "حياط دانشكده 01"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 4210071,
    name: "مكانيك كوانتوم پيشرفته 1",
    code: "41_4210071",
    prof: "افشاري محمد مهدي",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: ""},
      {days: [3], start: 9, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 4210086,
    name: "رياضي فيزيك 1",
    code: "41_4210086",
    prof: "مقدسين هدي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس 212"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس 212"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 4210088,
    name: "مكانيك تحليلي 2",
    code: "41_4210088",
    prof: "انصاري فرد محمد",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 202"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 4210090,
    name: "رياضي فيزيك 2",
    code: "41_4210090",
    prof: "جعفري محمود",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس 202"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس 202"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 4210091,
    name: "آزفيزيك پايه 3",
    code: "41_4210091",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210091,
    name: "آزفيزيك پايه 3",
    code: "42_4210091",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210096,
    name: "رياضي فيزيك 3",
    code: "41_4210096",
    prof: "رادين مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 211"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس 211"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 35,
    gender: "مختلط"
  },
  {
    id: 4210097,
    name: "آزاپتيك",
    code: "41_4210097",
    prof: "حمزه پور حسين",
    units: 2,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210097,
    name: "آزاپتيك",
    code: "42_4210097",
    prof: "حمزه پور حسين",
    units: 2,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210113,
    name: "فيزيك 1",
    code: "41_4210113",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: ""},
      {days: [4], start: 13.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 4210113,
    name: "فيزيك 1",
    code: "42_4210113",
    prof: "افشاري محمد مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: ""},
      {days: [4], start: 15, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 4210113,
    name: "فيزيك 1",
    code: "43_4210113",
    prof: "مشحون سارا",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس 202"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "41_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "42_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "43_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مرد"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "44_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مرد"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "45_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "زن"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "46_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "زن"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "47_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مرد"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "48_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مرد"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "49_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "زن"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "50_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "زن"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "51_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مرد"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "52_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مرد"
  },{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "53_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "زن"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "54_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "زن"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "55_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "زن"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "56_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "زن"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "57_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مرد"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "58_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مرد"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "59_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "زن"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "60_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "زن"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "61_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مرد"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "62_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مرد"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "63_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "زن"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "64_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "زن"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "65_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مرد"
  },
{
    id: 4210114,
    name: "آزفيزيك 1",
    code: "66_4210114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مرد"
  },
{
    id: 4210115,
    name: "فيزيك 2",
    code: "40_4210115",
    prof: "مقدسين هدي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 202"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 4210115,
    name: "فيزيك 2",
    code: "43_4210115",
    prof: "واعظ زاده مجيد",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: ""},
      {days: [4], start: 13.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 4210115,
    name: "فيزيك 2",
    code: "44_4210115",
    prof: "واعظ زاده مجيد",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: ""},
      {days: [4], start: 15, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 4210115,
    name: "فيزيك 2",
    code: "45_4210115",
    prof: "حاتمي محمد محسن",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "پرديس شهيد رضايي نژاد"},
      {days: [3], start: 10.5, duration: 2, location: "پرديس شهيد رضايي نژاد"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },{
    id: 4210115,
    name: "فيزيك 2",
    code: "46_4210115",
    prof: "حاتمي محمد محسن",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: ""},
      {days: [3], start: 9, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 4210115,
    name: "فيزيك 2",
    code: "47_4210115",
    prof: "صداقت مهسا",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: ""},
      {days: [4], start: 15, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 70,
    gender: "مختلط"
  },
{
    id: 4210115,
    name: "فيزيك 2",
    code: "48_4210115",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: ""},
      {days: [4], start: 10.5, duration: 2, location: ""}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 70,
    gender: "مختلط"
  },
{
    id: 4210115,
    name: "فيزيك 2",
    code: "49_4210115",
    prof: "صداقت مهسا",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: ""},
      {days: [4], start: 13.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 70,
    gender: "مختلط"
  },
{
    id: 4210115,
    name: "فيزيك 2",
    code: "51_4210115",
    prof: "افضل زاده رضا",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: ""},
      {days: [4], start: 7.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 70,
    gender: "مختلط"
  },
{
    id: 4210115,
    name: "فيزيك 2",
    code: "52_4210115",
    prof: "افضل زاده رضا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: ""},
      {days: [4], start: 9, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 70,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "41_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "42_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "43_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "44_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "45_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "46_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "47_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "48_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "49_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "50_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "51_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "52_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "53_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "54_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "55_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "56_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "57_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "58_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "59_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "60_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "61_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "62_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "63_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "64_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "65_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "66_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "67_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "68_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "69_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "70_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "71_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4210116,
    name: "آزفيزيك 2",
    code: "72_4210116",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },{
    id: 4210130,
    name: "الكترو ديناميك پيشرفته 1",
    code: "41_4210130",
    prof: "رادين مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس 202"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 4210134,
    name: "يادگيري ماشيني در فيزيك",
    code: "41_4210134",
    prof: "هدايتي خليل آباد هادي",
    units: 3,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "كلاس 206"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس 206"}
    ],
    examDate: "1405/04/08 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4212152,
    name: "مباني ماده چگال نرم",
    code: "41_4212152",
    prof: "نوروزي فر احسان",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس 206"},
      {days: [3], start: 15, duration: 1.5, location: "كلاس 211"}
    ],
    examDate: "1405/04/09 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4212159,
    name: "فيزيك حالت جامد پيشرفته 2",
    code: "41_4212159",
    prof: "مشحون سارا",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس 211"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس 211"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4212160,
    name: "فيزيك حالت جامد پيشرفته 1",
    code: "41_4212160",
    prof: "مشكوري مهدي",
    units: 3,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس 206"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس 206"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4212167,
    name: "فيزيك حالت جامد 1",
    code: "41_4212167",
    prof: "جعفري محمود",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 202"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس 202"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 4212173,
    name: "ابررسانايي و كاربرد آن",
    code: "41_4212173",
    prof: "افضلي رضا",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس 211"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس 211"}
    ],
    examDate: "1405/04/17 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 4212213,
    name: "آز حالت جامد",
    code: "41_4212213",
    prof: "صمدپور محمود",
    units: 2,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4212213,
    name: "آز حالت جامد",
    code: "42_4212213",
    prof: "صمدپور محمود",
    units: 2,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 4212228,
    name: "فيزيك ماده چگال 1",
    code: "41_4212228",
    prof: "جعفري محمود",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس 206"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس 206"}
    ],
    examDate: "1405/04/07 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4214022,
    name: "فيزيك آشكارسازها",
    code: "41_4214022",
    prof: "رحماني فائزه",
    units: 3,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "حياط دانشكده 01"},
      {days: [4], start: 9, duration: 1.5, location: "حياط دانشكده 01"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4214036,
    name: "فيزيك هسته اي و ذرات بنيادي",
    code: "41_4214036",
    prof: "رسولي فاطمه سادات",
    units: 3,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "كلاس 202"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس 202"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 4214044,
    name: "نظريه ميدان هاي كوانتومي 1",
    code: "41_4214044",
    prof: "نصيري راد امين",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 206"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 206"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },{
    id: 4218001,
    name: "نجوم و اختر فيزيك",
    code: "41_4218001",
    prof: "ژوليده حقيقي محمد حسين",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 211"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس 211"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 4218011,
    name: "ليزر",
    code: "41_4218011",
    prof: "رضايي فاطمه",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "حياط دانشكده 01"},
      {days: [4], start: 9, duration: 1.5, location: "حياط دانشكده 01"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 4218015,
    name: "فيزيك الكترومغناطيس و نور",
    code: "41_4218015",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 4218024,
    name: "كيهان شناسي",
    code: "41_4218024",
    prof: "انصاري فرد محمد",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "كلاس 206"},
      {days: [3], start: 15, duration: 1.5, location: "كلاس 206"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4218025,
    name: "فيزيك ليزر پيشرفته 1",
    code: "41_4218025",
    prof: "رضايي فاطمه",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "حياط دانشكده 01"},
      {days: [4], start: 15, duration: 1.5, location: "حياط دانشكده 01"}
    ],
    examDate: "1405/04/09 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4218027,
    name: "اختر فيزيك پيشرفته 2",
    code: "41_4218027",
    prof: "نصيري راد امين",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس 206"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس 206"}
    ],
    examDate: "1405/04/09 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4218034,
    name: "روش هاي آناليز نانو ساختارها",
    code: "41_4218034",
    prof: "صمدپور محمود",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس 206"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس 206"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده فیزیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 4218035,
    name: "آز نانوفيزيك 1",
    code: "41_4218035",
    prof: "صمدپور محمود",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده فیزیک"}
    ],
    examDate: "",
    department: "دانشکده فیزیک",
    capacity: 6,
    gender: "مختلط"
  }
,
// Kamp
{
    id: 1910002,
    name: "سمينار",
    code: "01_1910002",
    prof: "يعقوبي كعبه",
    units: 2,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 100,
    gender: "مختلط"
  },
{
    id: 1910006,
    name: "رساله دكتري",
    code: "19_1910006",
    prof: "اساتيد گروه آموزشي",
    units: 24,
    sessions: [],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1910007,
    name: "دفاع از پيشنهاد رساله دكتري",
    code: "19_1910007",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1910008,
    name: "دفاع مجدد از پيشنهاد رساله دكتري",
    code: "19_1910008",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1910009,
    name: "امتحان جامع دكتري 1",
    code: "19_1910009",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1910010,
    name: "امتحان جامع دكتري 2",
    code: "19_1910010",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1910011,
    name: "مدارهاي منطقي",
    code: "19_1910011",
    prof: "دلير روي فرد رسول",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1910016,
    name: "دستيار آموزشي",
    code: "19_1910016",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1910017,
    name: "رساله دكترا",
    code: "19_1910017",
    prof: "اساتيد گروه آموزشي",
    units: 24,
    sessions: [],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1910018,
    name: "سمينار 1",
    code: "19_1910018",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1910019,
    name: "سمينار 2",
    code: "19_1910019",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1910020,
    name: "الكترونيك ديجيتال و طراحي مدارهاي مجتمع پر تراكم",
    code: "19_1910020",
    prof: "صيفوري زينب",
    units: 3,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1910021,
    name: "پروژه",
    code: "19_1910021",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1910022,
    name: "نظريه و الگوريتم هاي گراف",
    code: "19_1910022",
    prof: "اساتيد گروه آموزشي (دكتر حسين شهسواري)",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1910023,
    name: "شبكه هاي كامپيوتري 1",
    code: "19_1910023",
    prof: "مراديان معصومه",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1910024,
    name: "شبكه هاي كامپيوتري 2",
    code: "19_1910024",
    prof: "يعقوبي كعبه",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/18 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1910026,
    name: "جبر خطي",
    code: "19_1910026",
    prof: "اساتيد گروه آموزشي (دكتر حسين شهسواري)",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/08 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1910031,
    name: "داده ساختارها و الگوريتم ها",
    code: "19_1910031",
    prof: "اساتيد گروه آموزشي (دكتر زينب قاسمي نراقي)",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1910033,
    name: "رايانش كوانتومي",
    code: "19_1910033",
    prof: "اساتيد گروه آموزشي (دكتر سيد عليرضا حسام محسني)",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 1910039,
    name: "زبان تخصصي",
    code: "19_1910039",
    prof: "يعقوبي كعبه",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1912002,
    name: "برنامه سازي پيشرفته",
    code: "18_1912002",
    prof: "خانميرزا حامد",
    units: 3,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/18 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1912002,
    name: "برنامه سازي پيشرفته",
    code: "19_1912002",
    prof: "زمانيان مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/18 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1912004,
    name: "طراحي الگوريتمها",
    code: "19_1912004",
    prof: "اثني عشري اصفهاني محمدمهدي",
    units: 3,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [5], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/07 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1912005,
    name: "نظريه زبانها وماشينها",
    code: "19_1912005",
    prof: "ناصر شريف بابك",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1912011,
    name: "مباني كامپيوتر و برنامه سازي",
    code: "19_1912011",
    prof: "اساتيد گروه آموزشي (دكتر زينب قاسمي نراقي)",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/19 13:30-16:30",
    department: "دانشکده کامپیوتر",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1912012,
    name: "اصول طراحي كامپايلر",
    code: "19_1912012",
    prof: "علائيان محمدهادي",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1912016,
    name: "مهندسي اينترنت",
    code: "19_1912016",
    prof: "زمانيان مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1912024,
    name: "آزمايشگاه سيستم عامل",
    code: "17_1912024",
    prof: "اساتيد گروه آموزشي (رويا بهرامي)",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1912024,
    name: "آزمايشگاه سيستم عامل",
    code: "18_1912024",
    prof: "اساتيد گروه آموزشي (رويا بهرامي)",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1912024,
    name: "آزمايشگاه سيستم عامل",
    code: "19_1912024",
    prof: "اساتيد گروه آموزشي (رويا بهرامي)",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1912025,
    name: "آزمايشگاه پايگاه داده ها",
    code: "17_1912025",
    prof: "اساتيد گروه آموزشي (رويا بهرامي)",
    units: 1,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1912025,
    name: "آزمايشگاه پايگاه داده ها",
    code: "18_1912025",
    prof: "اساتيد گروه آموزشي (رويا بهرامي)",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1912025,
    name: "آزمايشگاه پايگاه داده ها",
    code: "19_1912025",
    prof: "اساتيد گروه آموزشي (رويا بهرامي)",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1912027,
    name: "رياضيات گسسته",
    code: "19_1912027",
    prof: "خواسته سيد حسين",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1912028,
    name: "كارگاه كامپيوتر",
    code: "19_1912028",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 1912029,
    name: "روش پژوهش و ارائه",
    code: "19_1912029",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/18 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1912030,
    name: "پايگاه داده ها",
    code: "19_1912030",
    prof: "پيشگو بشري",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/19 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1912032,
    name: "تحليل و طراحي سيستم ها",
    code: "19_1912032",
    prof: "صديقيان كاشي سعيد",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1912050,
    name: "اصول و كاربردهاي اينترنت اشياء",
    code: "01_1912050",
    prof: "اساتيد گروه آموزشي (جهاني راد)",
    units: 3,
    sessions: [
      {days: [6], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [6], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/09 13:30-16:30",
    department: "دانشکده کامپیوتر",
    capacity: 100,
    gender: "مختلط"
  },
{
    id: 1912050,
    name: "اصول و كاربردهاي اينترنت اشياء",
    code: "19_1912050",
    prof: "صديقيان كاشي سعيد",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1912054,
    name: "هوش تجاري",
    code: "19_1912054",
    prof: "تارخ محمد جعفر",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1916005,
    name: "يادگيري ماشين",
    code: "11_1916005",
    prof: "علياري شوره دلي مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1916005,
    name: "يادگيري ماشين",
    code: "72_1916005",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1916010,
    name: "پردازش زبانهاي طبيعي",
    code: "19_1916010",
    prof: "پيشگو بشري",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [5], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1916011,
    name: "تصويرپردازي رقمي",
    code: "01_1916011",
    prof: "اساتيد گروه آموزشي (دكتر غياثي راد)",
    units: 3,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [1], start: 18, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/19 13:30-16:30",
    department: "دانشکده کامپیوتر",
    capacity: 60,
    gender: "مختلط"
  },
  {
    id: 1916022,
    name: "سمينار",
    code: "01_1916022",
    prof: "يعقوبي كعبه",
    units: 2,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [3], start: 16.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 1916022,
    name: "سمينار",
    code: "17_1916022",
    prof: "رضائي فاطمه",
    units: 2,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1916022,
    name: "سمينار",
    code: "18_1916022",
    prof: "علائيان محمدهادي",
    units: 2,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1916022,
    name: "سمينار",
    code: "19_1916022",
    prof: "پيشگو بشري",
    units: 2,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1916023,
    name: "پردازش تكاملي",
    code: "01_1916023",
    prof: "حميدي حجت اله",
    units: 3,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 16.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/18 13:30-16:30",
    department: "دانشکده کامپیوتر",
    capacity: 70,
    gender: "مختلط"
  },
{
    id: 1916023,
    name: "پردازش تكاملي",
    code: "19_1916023",
    prof: "اثني عشري اصفهاني محمدمهدي",
    units: 3,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [5], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/18 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1916028,
    name: "هوش مصنوعي و سيستم هاي خبره",
    code: "19_1916028",
    prof: "كوهزادي هيكويي مريم",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1916033,
    name: "مباني بينائي كامپيوتر",
    code: "19_1916033",
    prof: "نصيحت كن سيد بهروز",
    units: 3,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [5], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1916035,
    name: "شناسايي الگو",
    code: "19_1916035",
    prof: "ناصر شريف بابك",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1916040,
    name: "يادگيري تقويتي",
    code: "19_1916040",
    prof: "خواسته سيد حسين",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/19 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1916044,
    name: "داده كاوي پيشرفته",
    code: "01_1916044",
    prof: "پيشگو بشري",
    units: 3,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/16 13:30-16:30",
    department: "دانشکده کامپیوتر",
    capacity: 70,
    gender: "مختلط"
  },
{
    id: 1916044,
    name: "داده كاوي پيشرفته",
    code: "19_1916044",
    prof: "كوهزادي هيكويي مريم",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [5], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1916045,
    name: "پنهان سازي اطلاعات",
    code: "19_1916045",
    prof: "علائيان محمدهادي",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1916053,
    name: "سيستم هاي توصيه گر",
    code: "01_1916053",
    prof: "اساتيد گروه آموزشي (دكتر آفتابي)",
    units: 3,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [5], start: 16.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/06 13:30-16:30",
    department: "دانشکده کامپیوتر",
    capacity: 70,
    gender: "مختلط"
  },
  {
    id: 1916054,
    name: "يادگيري ژرف",
    code: "01_1916054",
    prof: "كوهزادي هيكويي مريم",
    units: 3,
    sessions: [
      {days: [6], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [6], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/17 13:30-16:30",
    department: "دانشکده کامپیوتر",
    capacity: 70,
    gender: "مختلط"
  },
{
    id: 1916057,
    name: "مدل هاي مولد عميق",
    code: "19_1916057",
    prof: "نصيحت كن سيد بهروز",
    units: 3,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/09 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1920001,
    name: "آزمون و طراحي آزمون پذير",
    code: "01_1920001",
    prof: "حميدي حجت اله",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "دانشکده کامپیوتر",
    capacity: 100,
    gender: "مختلط"
  },
{
    id: 1920002,
    name: "معماري كامپيوتر",
    code: "19_1920002",
    prof: "ده يادگاري مسعود",
    units: 3,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [3], start: 16.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/07 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1920004,
    name: "طراحي كامپيوتري سيستم هاي ديجيتال",
    code: "19_1920004",
    prof: "صيفوري زينب",
    units: 3,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [5], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/19 13:30-16:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1920005,
    name: "هم طراحي سخت افزار و نرم افزار",
    code: "19_1920005",
    prof: "رودكي لواساني هدا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1920009,
    name: "سيستمهاي عامل",
    code: "19_1920009",
    prof: "خانميرزا حامد",
    units: 3,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1920016,
    name: "سيگنالها وسيستمها",
    code: "19_1920016",
    prof: "رضائي فاطمه",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/19 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1920018,
    name: "آزشبكه هاي كامپيوتري",
    code: "16_1920018",
    prof: "اساتيد گروه آموزشي (داوود ميرزاحسيني)",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 13,
    gender: "مختلط"
  },
{
    id: 1920018,
    name: "آزشبكه هاي كامپيوتري",
    code: "17_1920018",
    prof: "اساتيد گروه آموزشي (داوود ميرزاحسيني)",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 13,
    gender: "مختلط"
  },
{
    id: 1920018,
    name: "آزشبكه هاي كامپيوتري",
    code: "18_1920018",
    prof: "اساتيد گروه آموزشي (داوود ميرزاحسيني)",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 13,
    gender: "مختلط"
  },
{
    id: 1920018,
    name: "آزشبكه هاي كامپيوتري",
    code: "19_1920018",
    prof: "اساتيد گروه آموزشي (داوود ميرزاحسيني)",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 13,
    gender: "مختلط"
  },
{
    id: 1920031,
    name: "كارگاه عمومي",
    code: "18_1920031",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1920031,
    name: "كارگاه عمومي",
    code: "19_1920031",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1920043,
    name: "ريزپردازنده و زبان اسمبلي",
    code: "18_1920043",
    prof: "دلير روي فرد رسول",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 1920043,
    name: "ريزپردازنده و زبان اسمبلي",
    code: "19_1920043",
    prof: "درماني محمد يوسف",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 1920044,
    name: "آزمايشگاه مدارهاي منطقي و معماري كامپيوتر",
    code: "17_1920044",
    prof: "اساتيد گروه آموزشي (آقاي نصراللهي)",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1920044,
    name: "آزمايشگاه مدارهاي منطقي و معماري كامپيوتر",
    code: "18_1920044",
    prof: "اساتيد گروه آموزشي (آقاي بنداريان)",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1920044,
    name: "آزمايشگاه مدارهاي منطقي و معماري كامپيوتر",
    code: "19_1920044",
    prof: "اساتيد گروه آموزشي (آقاي نصرالهي)",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "",
    department: "دانشکده کامپیوتر",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 1920045,
    name: "مدارهاي الكتريكي",
    code: "19_1920045",
    prof: "مراديان معصومه",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/09 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1920046,
    name: "سيستم هاي نهفته و بي درنگ",
    code: "19_1920046",
    prof: "عبدي آتنا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 1920050,
    name: "طراحي سيستم هاي كم مصرف",
    code: "01_1920050",
    prof: "رودكي لواساني هدا",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "دانشکده کامپیوتر",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 1920050,
    name: "طراحي سيستم هاي كم مصرف",
    code: "19_1920050",
    prof: "رودكي لواساني هدا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1920051,
    name: "طراحي سيستم هاي تحمل پذير اشكال",
    code: "19_1920051",
    prof: "عبدي آتنا",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1920053,
    name: "معماري پردازنده هاي اختصاصي سيگنال ديجيتال",
    code: "19_1920053",
    prof: "حسيني نژاد محبتي حسين",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1920062,
    name: "پردازش قابل باز پيكربندي",
    code: "01_1920062",
    prof: "صيفوري زينب",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [2], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/14 13:30-16:30",
    department: "دانشکده کامپیوتر",
    capacity: 100,
    gender: "مختلط"
  },
{
    id: 1920062,
    name: "پردازش قابل باز پيكربندي",
    code: "19_1920062",
    prof: "صيفوري زينب",
    units: 3,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1920063,
    name: "شتاب دهنده هاي سخت افزاري",
    code: "19_1920063",
    prof: "ده يادگاري مسعود",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 1920074,
    name: "ارزيابي كارايي سيستم هاي كامپيوتري",
    code: "01_1920074",
    prof: "مراديان معصومه",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/06 13:30-16:30",
    department: "دانشکده کامپیوتر",
    capacity: 70,
    gender: "مختلط"
  },
{
    id: 1920074,
    name: "ارزيابي كارايي سيستم هاي كامپيوتري",
    code: "19_1920074",
    prof: "مراديان معصومه",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/19 10:30-12:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 1920075,
    name: "شبكه هاي چند رسانه اي",
    code: "01_1920075",
    prof: "اساتيد گروه آموزشي (دكتر قندچي)",
    units: 3,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/08 13:30-16:30",
    department: "دانشکده کامپیوتر",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 1920075,
    name: "شبكه هاي چند رسانه اي",
    code: "19_1920075",
    prof: "درماني محمد يوسف",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 1920084,
    name: "مديريت شبكه",
    code: "01_1920084",
    prof: "يعقوبي كعبه",
    units: 3,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "دانشکده کامپیوتر",
    capacity: 100,
    gender: "مختلط"
  },
{
    id: 1920084,
    name: "مديريت شبكه",
    code: "19_1920084",
    prof: "يعقوبي كعبه",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده کامپیوتر",
    capacity: 20,
    gender: "مختلط"
  }
,
//Omran
{
    id: 2220035,
    name: "سمينار",
    code: "21_2220035",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2220035,
    name: "سمينار",
    code: "22_2220035",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2220035,
    name: "سمينار",
    code: "23_2220035",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2220035,
    name: "سمينار",
    code: "24_2220035",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2220035,
    name: "سمينار",
    code: "25_2220035",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2220035,
    name: "سمينار",
    code: "26_2220035",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2220035,
    name: "سمينار",
    code: "27_2220035",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2220035,
    name: "سمينار",
    code: "28_2220035",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2220084,
    name: "اقتصاد مهندسي",
    code: "21_2220084",
    prof: "دهقاني سانيج محمدسعيد",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/09 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2220097,
    name: "بازرسي،تعميروترميم سازه ها",
    code: "21_2220097",
    prof: "بهشتي اول سيد بهرام",
    units: 2,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2220098,
    name: "اصول مهندسي زلزله وباد",
    code: "21_2220098",
    prof: "قادري گركاني مجيد",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 2220101,
    name: "رساله دكترا",
    code: "21_2220101",
    prof: "اساتيد گروه آموزشي",
    units: 24,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 2220105,
    name: "مباني GIS در مهندسي عمران",
    code: "21_2220105",
    prof: "رحيم زادگان مجيد",
    units: 2,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2220110,
    name: "محاسبات عددي",
    code: "21_2220110",
    prof: "اسدي رزا",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2220110,
    name: "محاسبات عددي",
    code: "22_2220110",
    prof: "ايزدي اردلان",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2220116,
    name: "مقررات ملي ساختمان",
    code: "21_2220116",
    prof: "صباغ يزدي سعيد رضا",
    units: 2,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 2220121,
    name: "پروژه تخصصي",
    code: "21_2220121",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 2220157,
    name: "دفاع از پيشنهاد رساله دكتري",
    code: "21_2220157",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 2220158,
    name: "دفاع مجدد از پيشنهاد رساله دكتري",
    code: "21_2220158",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 2220159,
    name: "امتحان جامع دكتري 1",
    code: "21_2220159",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 2220160,
    name: "امتحان جامع دكتري 2",
    code: "21_2220160",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 2220162,
    name: "تاسيسات مكانيكي وبرقي",
    code: "21_2220162",
    prof: "وكيل زاده داود",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/07 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2220164,
    name: "پايان نامه",
    code: "21_2220164",
    prof: "اساتيد گروه آموزشي",
    units: 6,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 120,
    gender: "مختلط"
  },
{
    id: 2220171,
    name: "هوش مصنوعي و تحول ديجيتال",
    code: "21_2220171",
    prof: "قاسم زاده حسن",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2220171,
    name: "هوش مصنوعي و تحول ديجيتال",
    code: "22_2220171",
    prof: "صادقي نعيمه",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2220171,
    name: "هوش مصنوعي و تحول ديجيتال",
    code: "23_2220171",
    prof: "صادقي نعيمه",
    units: 2,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2220172,
    name: "كارگاه عمومي",
    code: "21_2220172",
    prof: "وكيل زاده داود",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2220172,
    name: "كارگاه عمومي",
    code: "22_2220172",
    prof: "وكيل زاده داود",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2220172,
    name: "كارگاه عمومي",
    code: "23_2220172",
    prof: "وكيل زاده داود",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2220172,
    name: "كارگاه عمومي",
    code: "24_2220172",
    prof: "وكيل زاده داود",
    units: 1,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2220172,
    name: "كارگاه عمومي",
    code: "25_2220172",
    prof: "وكيل زاده داود",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2220173,
    name: "برنامه سازي كامپيوتر",
    code: "21_2220173",
    prof: "باراني لنباني اميد رضا",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [2], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 2220173,
    name: "برنامه سازي كامپيوتر",
    code: "22_2220173",
    prof: "خدادادي مجتبي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
  {
    id: 2220175,
    name: "مكانيك جامدات1",
    code: "21_2220175",
    prof: "عسجدي امير حسين",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2220175,
    name: "مكانيك جامدات1",
    code: "22_2220175",
    prof: "قادري گركاني مجيد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2220177,
    name: "مباني معماري و شهرسازي",
    code: "21_2220177",
    prof: "اساتيد گروه آموزشي (دكتر رفيع زاده)",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 32,
    gender: "مختلط"
  },
{
    id: 2220177,
    name: "مباني معماري و شهرسازي",
    code: "22_2220177",
    prof: "اساتيد گروه آموزشي (دكتر رفيع زاده)",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 32,
    gender: "مختلط"
  },
{
    id: 2220177,
    name: "مباني معماري و شهرسازي",
    code: "23_2220177",
    prof: "اساتيد گروه آموزشي (دكتر يزدان نجاد)",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی عمرan",
    capacity: 32,
    gender: "مختلط"
  },
{
    id: 2220185,
    name: "مكانيك خاك",
    code: "21_2220185",
    prof: "عبدي محمود رضا",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2220185,
    name: "مكانيك خاك",
    code: "22_2220185",
    prof: "رئيسيان زاده جواد",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2220205,
    name: "تغيير اقليم",
    code: "21_2220205",
    prof: "اسدي رزا",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2220228,
    name: "كاربرد پيشرفته هوش مصنوعي و تحول ديجيتال",
    code: "21_2220228",
    prof: "قاسم زاده حسن",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 2221023,
    name: "مكانيك سيالات",
    code: "21_2221023",
    prof: "سلطان پور محسن",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2221023,
    name: "مكانيك سيالات",
    code: "22_2221023",
    prof: "استادميرزا تهراني محمدجواد",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2221023,
    name: "مكانيك سيالات",
    code: "23_2221023",
    prof: "عليزاد كريم",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2221026,
    name: "هيدروليك",
    code: "21_2221026",
    prof: "يكه يزدان دوست فرهاد",
    units: 2,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2221026,
    name: "هيدروليك",
    code: "22_2221026",
    prof: "استادميرزا تهراني محمدجواد",
    units: 2,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 2221027,
    name: "آزهيدروليك",
    code: "21_2221027",
    prof: "وكيل زاده داود",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2221027,
    name: "آزهيدروليك",
    code: "22_2221027",
    prof: "وكيل زاده داود",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2221027,
    name: "آزهيدروليك",
    code: "23_2221027",
    prof: "عليزاد كريم",
    units: 1,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2221027,
    name: "آزهيدروليك",
    code: "24_2221027",
    prof: "ايزدي اردلان",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2221027,
    name: "آزهيدروليك",
    code: "25_2221027",
    prof: "ايزدي اردلان",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2221027,
    name: "آزهيدروليك",
    code: "26_2221027",
    prof: "استادميرزا تهراني محمدجواد",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2221036,
    name: "هيدرولوژي مهندسي",
    code: "21_2221036",
    prof: "مهجوري مجد نجمه",
    units: 2,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2221036,
    name: "هيدرولوژي مهندسي",
    code: "22_2221036",
    prof: "مهجوري مجد نجمه",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2221039,
    name: "زبان تخصصي",
    code: "21_2221039",
    prof: "عليزاد كريم",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2221043,
    name: "آبهاي زيرزميني",
    code: "21_2221043",
    prof: "موسوي سيد مرتضي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2221047,
    name: "مهندسي اب وفاضلاب وپروژه",
    code: "21_2221047",
    prof: "كاويانپور محمدرضا",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 2221049,
    name: "بناهاي ابي",
    code: "21_2221049",
    prof: "كاويانپور محمدرضا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 2221065,
    name: "روشهاي عددي درمهندسي اب",
    code: "21_2221065",
    prof: "حجازي كورش",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/07 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2221067,
    name: "طراحي هيدروليكي سازه ها",
    code: "21_2221067",
    prof: "كاويانپور محمدرضا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/09 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2221068,
    name: "مهندسي رودخانه",
    code: "21_2221068",
    prof: "يكه يزدان دوست فرهاد",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
  {
    id: 2221107,
    name: "سكوهاي دريايي",
    code: "21_2221107",
    prof: "عسگريان بهروز و زين الديني مصطفي",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/08 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2221108,
    name: "طراحي بنادر",
    code: "21_2221108",
    prof: "وفائي فريدون و زين الديني مصطفي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/08 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2221118,
    name: "هيدروليك محاسباتي",
    code: "21_2221118",
    prof: "عليزاد كريم",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2221172,
    name: "مدل هاي فيزيكي واندازه گيري ميداني",
    code: "21_2221172",
    prof: "استادميرزا تهراني محمدجواد",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2222002,
    name: "تحليل و مديريت سيستم هاي منابع آب 1",
    code: "21_2222002",
    prof: "برهاني داريان عليرضا",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [2], start: 16.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2222019,
    name: "روش هاي عددي در مهندسي آب ( يا هيدروليك محاسباتي)",
    code: "21_2222019",
    prof: "موسوي سيد مرتضي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2222021,
    name: "مدلسازي جريان وكيفيت منابع آب ( سطحي و زيرزميني)",
    code: "21_2222021",
    prof: "اسدي رزا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2222035,
    name: "مباحث پيشرفته در كاربرد GIS و RS درمنابع آب",
    code: "21_2222035",
    prof: "رحيم زادگان مجيد",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2227003,
    name: "آز مكانيك خاك پيشرفته",
    code: "21_2227003",
    prof: "عبدي محمود رضا",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/12 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 2227012,
    name: "مكانيك خاك 2",
    code: "21_2227012",
    prof: "عبدي محمود رضا",
    units: 2,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 2227013,
    name: "روشهاي اجزامحدود",
    code: "21_2227013",
    prof: "باراني لنباني اميد رضا",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/09 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 8,
    gender: "مختلط"
  },
  {
    id: 2227031,
    name: "آزمكانيك خاك",
    code: "21_2227031",
    prof: "علي آباديان زينب",
    units: 1,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2227031,
    name: "آزمكانيك خاك",
    code: "22_2227031",
    prof: "رئيسيان زاده جواد",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2227031,
    name: "آزمكانيك خاك",
    code: "23_2227031",
    prof: "علي آباديان زينب",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2227031,
    name: "آزمكانيك خاك",
    code: "24_2227031",
    prof: "رئيسيان زاده جواد",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2227048,
    name: "نظريه خميري درمكانيك خاك",
    code: "21_2227048",
    prof: "باراني لنباني اميد رضا",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 2227059,
    name: "ژئوتكنيك لرزه اي",
    code: "21_2227059",
    prof: "رئيسيان زاده جواد",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 2227066,
    name: "تحقيقات محلي درساختگاه",
    code: "21_2227066",
    prof: "عبدي محمود رضا",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 2227071,
    name: "مهندسي پي وپروژه",
    code: "21_2227071",
    prof: "مقدس تفرشي سيد ناصر",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2227071,
    name: "مهندسي پي وپروژه",
    code: "22_2227071",
    prof: "قضاوي محمود",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2227074,
    name: "بهسازي خاك",
    code: "21_2227074",
    prof: "قضاوي محمود",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 2227078,
    name: "خاك مسلح",
    code: "21_2227078",
    prof: "مقدس تفرشي سيد ناصر",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 2227105,
    name: "روش هاي اجرائ گودوسازه نگهبان",
    code: "21_2227105",
    prof: "رئيسيان زاده جواد",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2227112,
    name: "پترو فيزيك مياني نمودارگيري و چاه آزمايي",
    code: "21_2227112",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی عمرan"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 5,
    gender: "مختلط"
  },
  {
    id: 2227116,
    name: "ژئو فيزيك لرزه اي",
    code: "21_2227116",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 5,
    gender: "مختلط"
  },
{
    id: 2227117,
    name: "ژئومكانيك حفاري و تكميل چاه",
    code: "21_2227117",
    prof: "علي آباديان زينب",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 5,
    gender: "مختلط"
  },
{
    id: 2229001,
    name: "حقوق ساخت",
    code: "21_2229001",
    prof: "عباسيان جهرمي حميدرضا",
    units: 3,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [2], start: 18, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 2229004,
    name: "تكنولوژي عالي بتن",
    code: "21_2229004",
    prof: "باقري عليرضا",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2229008,
    name: "مدل سازي اطلاعات ساخت",
    code: "21_2229008",
    prof: "صادقي نعيمه",
    units: 3,
    sessions: [
      {days: [5], start: 16.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [5], start: 18, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 2229010,
    name: "مديريت پروژه",
    code: "21_2229010",
    prof: "دادپور محمد حسين",
    units: 3,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [1], start: 18, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 2229013,
    name: "تحليل و طراحي سيستم ها",
    code: "21_2229013",
    prof: "صادقي نعيمه",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/09 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2229018,
    name: "مديريت نگهداري پروژه هاي عمراني",
    code: "21_2229018",
    prof: "دهقاني سانيج محمدسعيد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2229024,
    name: "مديريت ماشين آلات ساخت",
    code: "21_2229024",
    prof: "عليپوري يعقوب",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2229024,
    name: "مديريت ماشين آلات ساخت",
    code: "22_2229024",
    prof: "عليپوري يعقوب",
    units: 3,
    sessions: [
      {days: [4], start: 16.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 18, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 2271042,
    name: "طراحي ساختمانهاي فلزي پيشرفته",
    code: "21_2271042",
    prof: "زندي امير پيمان",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [5], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/09 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271068,
    name: "مقاومت مصالح 2",
    code: "21_2271068",
    prof: "علي آباديان زينب",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2271068,
    name: "مقاومت مصالح 2",
    code: "22_2271068",
    prof: "كياني كيوان",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2271082,
    name: "سازه هاي فولادي 1",
    code: "21_2271082",
    prof: "خليفه لو سيداكبر",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2271082,
    name: "سازه هاي فولادي 1",
    code: "22_2271082",
    prof: "اساتيد گروه آموزشي (مهندس زندي)",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [5], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2271084,
    name: "سازه هاي بتن آرمه 2",
    code: "21_2271084",
    prof: "ميرزا بزرگ حسن",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2271084,
    name: "سازه هاي بتن آرمه 2",
    code: "22_2271084",
    prof: "نصراله زاده نشلي كورش",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2271086,
    name: "تئوري نقشه برداري 1",
    code: "21_2271086",
    prof: "رحيم زادگان مجيد",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2271086,
    name: "تئوري نقشه برداري 1",
    code: "22_2271086",
    prof: "رحيم زادگان مجيد",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2271088,
    name: "استاتيك",
    code: "21_2271088",
    prof: "عسگريان بهروز",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2271088,
    name: "استاتيك",
    code: "22_2271088",
    prof: "عسجدي امير حسين",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
{
    id: 2271088,
    name: "استاتيك",
    code: "23_2271088",
    prof: "اصيل قره باغي سعيد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 2271100,
    name: "آزبتن",
    code: "21_2271100",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 13,
    gender: "مختلط"
  },
{
    id: 2271100,
    name: "آزبتن",
    code: "22_2271100",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 13,
    gender: "مختلط"
  },
{
    id: 2271102,
    name: "آزمصالح ساختمان",
    code: "21_2271102",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 13,
    gender: "مختلط"
  },
{
    id: 2271102,
    name: "آزمصالح ساختمان",
    code: "22_2271102",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 13,
    gender: "مختلط"
  },
{
    id: 2271102,
    name: "آزمصالح ساختمان",
    code: "23_2271102",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 13,
    gender: "مختلط"
  },
{
    id: 2271107,
    name: "متره وبراورد وپروژه",
    code: "21_2271107",
    prof: "دادپور محمد حسين",
    units: 1,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 2271108,
    name: "تحليل سازه ها 1",
    code: "21_2271108",
    prof: "كرمي محمدي رضا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2271108,
    name: "تحليل سازه ها 1",
    code: "22_2271108",
    prof: "دلفاني محمدرسول",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2271118,
    name: "تحليل سازه ها 2",
    code: "21_2271118",
    prof: "خليفه لو سيداكبر",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/18 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 2271121,
    name: "سازه هاي بتن آرمه 1",
    code: "21_2271121",
    prof: "بهشتي اول سيد بهرام",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2271121,
    name: "سازه هاي بتن آرمه 1",
    code: "22_2271121",
    prof: "مسعودي مصطفي",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2271123,
    name: "روشهاي اجرايي ساختمان",
    code: "21_2271123",
    prof: "اساتيد گروه آموزشي (دكتر سيد پيمان موسوي)",
    units: 2,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
  {
    id: 2271131,
    name: "سازه هاي فولادي 2",
    code: "21_2271131",
    prof: "فنائي نادر",
    units: 2,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/21 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2271131,
    name: "سازه هاي فولادي 2",
    code: "22_2271131",
    prof: "مشايخي محمد رضا",
    units: 2,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/21 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2271142,
    name: "آزمقاومت مصالح",
    code: "21_2271142",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2271142,
    name: "آزمقاومت مصالح",
    code: "22_2271142",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2271142,
    name: "آزمقاومت مصالح",
    code: "23_2271142",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2271148,
    name: "تكنولوژي بتن",
    code: "21_2271148",
    prof: "زنگانه حامد",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2271148,
    name: "تكنولوژي بتن",
    code: "22_2271148",
    prof: "باقري عليرضا",
    units: 2,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2271148,
    name: "تكنولوژي بتن",
    code: "23_2271148",
    prof: "باقري عليرضا",
    units: 2,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 2271196,
    name: "روشهاي عددي دردريا",
    code: "21_2271196",
    prof: "حجازي كورش",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271209,
    name: "پروژه بتن آرمه",
    code: "21_2271209",
    prof: "ميرزا بزرگ حسن",
    units: 1,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2271209,
    name: "پروژه بتن آرمه",
    code: "22_2271209",
    prof: "نصراله زاده نشلي كورش",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2271209,
    name: "پروژه بتن آرمه",
    code: "23_2271209",
    prof: "مسعودي مصطفي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2271209,
    name: "پروژه بتن آرمه",
    code: "24_2271209",
    prof: "بهشتي اول سيد بهرام",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 2271216,
    name: "پروژه سازه هاي فولادي",
    code: "21_2271216",
    prof: "فنائي نادر",
    units: 1,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271216,
    name: "پروژه سازه هاي فولادي",
    code: "22_2271216",
    prof: "مشايخي محمد رضا",
    units: 1,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271216,
    name: "پروژه سازه هاي فولادي",
    code: "23_2271216",
    prof: "خليفه لو سيداكبر",
    units: 1,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271216,
    name: "پروژه سازه هاي فولادي",
    code: "24_2271216",
    prof: "زندي امير پيمان",
    units: 1,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271225,
    name: "ميكرو مكانيك آسيب در جامدات",
    code: "21_2271225",
    prof: "دلفاني محمدرسول",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271231,
    name: "پايداري سازه ها",
    code: "21_2271231",
    prof: "خليفه لو سيداكبر",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/07 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271233,
    name: "انفجار و ملاحظات طراحي",
    code: "21_2271233",
    prof: "زين الديني مصطفي",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271237,
    name: "طراحي لرزه اي سازه ها",
    code: "21_2271237",
    prof: "فنائي نادر",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271238,
    name: "آسيب پذيري و بهسازي لرزه اي سازه ها",
    code: "21_2271238",
    prof: "نصراله زاده نشلي كورش",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271242,
    name: "پايش سلامت سازه ها",
    code: "21_2271242",
    prof: "بهشتي اول سيد بهرام",
    units: 2,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/08 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 2271246,
    name: "تئوري ورق و پوسته",
    code: "21_2271246",
    prof: "كياني كيوان",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271253,
    name: "اجزاء محدود پيشرفته (غير خطي)",
    code: "21_2271253",
    prof: "ميرزا بزرگ حسن",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271259,
    name: "روش اجزاء محدود",
    code: "21_2271259",
    prof: "اصيل قره باغي سعيد",
    units: 3,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 16.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/17 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271264,
    name: "روش هاي عددي در مهندسي سازه",
    code: "21_2271264",
    prof: "اصيل قره باغي سعيد",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271274,
    name: "طراحي سازه هاي چوبي نوين",
    code: "21_2271274",
    prof: "صباغ يزدي سعيد رضا",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2271277,
    name: "عمليات نقشه برداري 1",
    code: "21_2271277",
    prof: "اساتيد گروه آموزشي (مهندس آرش اميني)",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/19 17:00-20:00",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2271277,
    name: "عمليات نقشه برداري 1",
    code: "22_2271277",
    prof: "اساتيد گروه آموزشي (مهندس آرش اميني)",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/19 17:00-20:00",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2271277,
    name: "عمليات نقشه برداري 1",
    code: "23_2271277",
    prof: "اساتيد گروه آموزشي (مهندس آرش اميني)",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/19 17:00-20:00",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2271277,
    name: "عمليات نقشه برداري 1",
    code: "24_2271277",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/19 17:00-20:00",
    department: "دانشکده مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 2272009,
    name: "تحليل و طراحي غير ارتجاعي سازه ها",
    code: "21_2272009",
    prof: "عسگريان بهروز",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2272032,
    name: "لرزه شناسي و مهندسي زلزله",
    code: "21_2272032",
    prof: "ذوالفقاري محمد رضا",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 2272033,
    name: "طراحي لرزه اي سازه ها",
    code: "21_2272033",
    prof: "قادري گركاني مجيد",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2272034,
    name: "آسيب پذيري و بهسازي لرزه اي سازه ها",
    code: "21_2272034",
    prof: "مسعودي مصطفي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2272038,
    name: "پايش سلامت سازه ها",
    code: "21_2272038",
    prof: "مشايخي محمد رضا",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/07 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2272049,
    name: "تحليل خطر زلزله",
    code: "21_2272049",
    prof: "ذوالفقاري محمد رضا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2272064,
    name: "كنترل لرزه اي سازه ها",
    code: "21_2272064",
    prof: "كرمي محمدي رضا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2274026,
    name: "مديريت كيفي منابع آب",
    code: "21_2274026",
    prof: "مهجوري مجد نجمه",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/07 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 2279005,
    name: "آزمايشگاه روسازي",
    code: "21_2279005",
    prof: "فخري منصور",
    units: 1,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 13,
    gender: "مختلط"
  },
{
    id: 2279005,
    name: "آزمايشگاه روسازي",
    code: "22_2279005",
    prof: "خدادادي مجتبي",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 13,
    gender: "مختلط"
  },
{
    id: 2279008,
    name: "مهندسي ترابري",
    code: "21_2279008",
    prof: "حاجي حسينلو منصور",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2279018,
    name: "روسازي راه",
    code: "21_2279018",
    prof: "فخري منصور",
    units: 2,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 2279021,
    name: "راهسازي",
    code: "21_2279021",
    prof: "منجم محمد سعيد",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2279021,
    name: "راهسازي",
    code: "22_2279021",
    prof: "منجم محمد سعيد",
    units: 2,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 2279032,
    name: "تقاضا در حمل ونقل",
    code: "21_2279032",
    prof: "ادريسي علي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/06 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2279038,
    name: "مديريت ونگهداري راه",
    code: "21_2279038",
    prof: "فخري منصور",
    units: 3,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/08 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2279040,
    name: "ايمني در ترافيك",
    code: "21_2279040",
    prof: "حاجي حسينلو منصور",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2279058,
    name: "مهندسي بنادر",
    code: "21_2279058",
    prof: "فخري منصور",
    units: 3,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2279060,
    name: "مهندسي راه آهن پيشرفته",
    code: "21_2279060",
    prof: "منجم محمد سعيد",
    units: 3,
    sessions: [
      {days: [3], start: 16.5, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 16.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2279066,
    name: "تحليل و ارزيابي سيستم هاي حمل و نقل",
    code: "21_2279066",
    prof: "ادريسي علي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"},
      {days: [4], start: 15, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2279076,
    name: "پروژه راه",
    code: "21_2279076",
    prof: "منجم محمد سعيد",
    units: 1,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2279076,
    name: "پروژه راه",
    code: "22_2279076",
    prof: "منجم محمد سعيد",
    units: 1,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2279076,
    name: "پروژه راه",
    code: "23_2279076",
    prof: "منجم محمد سعيد",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 2279076,
    name: "پروژه راه",
    code: "24_2279076",
    prof: "منجم محمد سعيد",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده مهندسی عمران"}
    ],
    examDate: "",
    department: "دانشکده مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
// Mekanik
{
    id: 3330014,
    name: "زبان تخصصي",
    code: "31_3330014",
    prof: "آقانجفي سيروس",
    units: 2,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس 201"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330039,
    name: "برنامه سازي كامپيوتر",
    code: "31_3330039",
    prof: "ستاري اميرمحمد",
    units: 3,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "كلاس 204"},
      {days: [4], start: 16.5, duration: 1.5, location: "كلاس 204"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 3330039,
    name: "برنامه سازي كامپيوتر",
    code: "32_3330039",
    prof: "كازروني مهرداد",
    units: 3,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "كلاس 202"},
      {days: [4], start: 16.5, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 3330040,
    name: "محاسبات عددي",
    code: "31_3330040",
    prof: "ساداتي سيدحسين",
    units: 2,
    sessions: [
      {days: [3], start: 16.5, duration: 1.5, location: "كلاس 201"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 3330040,
    name: "محاسبات عددي",
    code: "32_3330040",
    prof: "ترابي فرشاد",
    units: 2,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "كلاس 201"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 3330042,
    name: "مباني مهندسي برق 2",
    code: "31_3330042",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس 205"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس 205"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 3330043,
    name: "آز مباني مهندسي برق",
    code: "31_3330043",
    prof: "اساتيد گروه آموزشي (مهندس محمدي)",
    units: 1,
    sessions: [
      {days: [3], start: 16.5, duration: 1.5, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 3330043,
    name: "آز مباني مهندسي برق",
    code: "32_3330043",
    prof: "اساتيد گروه آموزشي (مهندس محمدي)",
    units: 1,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 3330043,
    name: "آز مباني مهندسي برق",
    code: "33_3330043",
    prof: "اساتيد گروه آموزشي (مهندس بهاري)",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 3330043,
    name: "آز مباني مهندسي برق",
    code: "34_3330043",
    prof: "اساتيد گروه آموزشي (مهندس بهاري)",
    units: 1,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 3330051,
    name: "كنترل مدرن",
    code: "31_3330051",
    prof: "نجفي اردكاني علي",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "كلاس 205"},
      {days: [3], start: 15, duration: 1.5, location: "كلاس 205"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 60,
    gender: "مختلط"
  },
  {
    id: 3330077,
    name: "محركه هاي نا متداول",
    code: "31_3330077",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "كلاس 201"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 3330089,
    name: "اقتصاد و انرژي در ايران و جهان",
    code: "31_3330089",
    prof: "عميد پور مجيد",
    units: 2,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330092,
    name: "كاربردهاي انرژي خورشيدي",
    code: "31_3330092",
    prof: "بهبهاني نيا سيد علي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس 306"},
      {days: [5], start: 15, duration: 1.5, location: "كلاس 306"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330103,
    name: "رياضيات مهندسي",
    code: "31_3330103",
    prof: "رسولي آيسا",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس 202"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330103,
    name: "رياضيات مهندسي",
    code: "32_3330103",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس 204"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس 204"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330105,
    name: "دفاع از پيشنهاد رساله دكتري",
    code: "30_3330105",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 3330106,
    name: "دفاع مجدد از پيشنهاد رساله دكتري",
    code: "30_3330106",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 3330107,
    name: "امتحان جامع دكتري 1",
    code: "30_3330107",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 3330108,
    name: "امتحان جامع دكتري 2",
    code: "30_3330108",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 5,
    gender: "مختلط"
  },
{
    id: 3330111,
    name: "پايان نامه",
    code: "30_3330111",
    prof: "اساتيد گروه آموزشي",
    units: 6,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 3330114,
    name: "اقتصاد مهندسي",
    code: "31_3330114",
    prof: "زماني پدرام مونا",
    units: 2,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس 205"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس 205"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330115,
    name: "پروژه",
    code: "31_3330115",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 100,
    gender: "مختلط"
  },
{
    id: 3330117,
    name: "دستيار آموزشي",
    code: "30_3330117",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 3330118,
    name: "رساله دكترا",
    code: "30_3330118",
    prof: "اساتيد گروه آموزشي",
    units: 24,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 3330122,
    name: "مقدمه اي بر سيستم هاي ميكرو و نانوالكترومكانيك",
    code: "31_3330122",
    prof: "لساني علي",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس 206"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس 206"}
    ],
    examDate: "1405/04/21 13:30-16:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
  {
    id: 3330129,
    name: "پديده هاي انتقال حرارت و جرم در سيستم هاي حياتي",
    code: "31_3330129",
    prof: "شربتدار مهكامه",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 306"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس 306"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330131,
    name: "ترموديناميك 1",
    code: "31_3330131",
    prof: "بازارگان مجيد",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 202"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330131,
    name: "ترموديناميك 1",
    code: "32_3330131",
    prof: "شهيديان آزاده",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 204"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس 204"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330132,
    name: "ترموديناميك 2",
    code: "31_3330132",
    prof: "كارمزدي محسن",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 206"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس 206"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330132,
    name: "ترموديناميك 2",
    code: "32_3330132",
    prof: "ضيابشرحق مسعود",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 205"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس 205"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330133,
    name: "آزترموديناميك",
    code: "31_3330133",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی مکانیک"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 3330133,
    name: "آزترموديناميك",
    code: "32_3330133",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 3330133,
    name: "آزترموديناميك",
    code: "33_3330133",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده مهندسی مکانیک"},
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 3330133,
    name: "آزترموديناميك",
    code: "34_3330133",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 3330133,
    name: "آزترموديناميك",
    code: "35_3330133",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 3330134,
    name: "مكانيك سيالات 1",
    code: "31_3330134",
    prof: "مجري افسانه",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 207"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس 207"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330134,
    name: "مكانيك سيالات 1",
    code: "32_3330134",
    prof: "شمس مهرزاد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 201"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس 201"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
  {
    id: 3330135,
    name: "مكانيك سيالات 2",
    code: "31_3330135",
    prof: "شربتدار مهكامه",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس 201"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس 201"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330136,
    name: "آزمكانيك سيالات",
    code: "31_3330136",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 3330136,
    name: "آزمكانيك سيالات",
    code: "32_3330136",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 3330136,
    name: "آزمكانيك سيالات",
    code: "33_3330136",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده مهندسی مکانیک"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 3330136,
    name: "آزمكانيك سيالات",
    code: "34_3330136",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 3330136,
    name: "آزمكانيك سيالات",
    code: "35_3330136",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 9,
    gender: "مختلط"
  },
{
    id: 3330137,
    name: "انتقال حرارت 1",
    code: "31_3330137",
    prof: "قاسمي مجيد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 205"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس 205"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330137,
    name: "انتقال حرارت 1",
    code: "32_3330137",
    prof: "آقانجفي سيروس",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 206"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس 206"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330139,
    name: "موتورهاي احتراق داخلي",
    code: "31_3330139",
    prof: "شامخي امير حسين",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس 201"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس 201"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330143,
    name: "كنترل آلودگي محيط زيست",
    code: "31_3330143",
    prof: "بازارگان مجيد",
    units: 2,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 305"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330149,
    name: "نيروگاه حرارتي",
    code: "31_3330149",
    prof: "شاه نظري محمد رضا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 207"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس 207"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330150,
    name: "طراحي مبدلهاي حرارتي",
    code: "31_3330150",
    prof: "صيادي حسين",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 307"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس 307"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330152,
    name: "حرارت مركزي و تهويه مطبوع 1",
    code: "31_3330152",
    prof: "ستاري اميرمحمد",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس 207"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس 207"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330171,
    name: "استاتيك",
    code: "31_3330171",
    prof: "شاهاني امير رضا",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس 202"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330171,
    name: "استاتيك",
    code: "32_3330171",
    prof: "خليلي سيد محمدرضا",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس 201"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس 201"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330171,
    name: "استاتيك",
    code: "33_3330171",
    prof: "لساني علي",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس 204"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس 204"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
  {
    id: 3330172,
    name: "ديناميك",
    code: "31_3330172",
    prof: "ساداتي سيدحسين",
    units: 4,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس 206"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس 206"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330174,
    name: "مقاومت مصالح 1",
    code: "31_3330174",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 206"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 206"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330174,
    name: "مقاومت مصالح 1",
    code: "32_3330174",
    prof: "قاجار رحمت الله",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 205"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 205"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330177,
    name: "طراحي اجزاء 1",
    code: "31_3330177",
    prof: "لساني علي",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "كلاس 202"},
      {days: [3], start: 15, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330177,
    name: "طراحي اجزاء 1",
    code: "32_3330177",
    prof: "هدايتي رضا",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "كلاس 204"},
      {days: [3], start: 15, duration: 1.5, location: "كلاس 204"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330178,
    name: "طراحي اجزاء 2",
    code: "31_3330178",
    prof: "كارمزدي علي",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس 205"},
      {days: [3], start: 7.5, duration: 1.5, location: "كلاس 205"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330178,
    name: "طراحي اجزاء 2",
    code: "32_3330178",
    prof: "نخودچي سهيل",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس 206"},
      {days: [3], start: 7.5, duration: 1.5, location: "كلاس 206"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330179,
    name: "مقاومت مصالح 2",
    code: "31_3330179",
    prof: "جلالي آقچاي عبدالحسين",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "كلاس 305"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330179,
    name: "مقاومت مصالح 2",
    code: "32_3330179",
    prof: "قريشي سيد مجيد",
    units: 2,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "كلاس 305"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330180,
    name: "آزمقاومت مصالح",
    code: "31_3330180",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 3330180,
    name: "آزمقاومت مصالح",
    code: "32_3330180",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 3330180,
    name: "آزمقاومت مصالح",
    code: "33_3330180",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 3330180,
    name: "آزمقاومت مصالح",
    code: "34_3330180",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 3330180,
    name: "آزمقاومت مصالح",
    code: "35_3330180",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330181,
    name: "ديناميك ماشين",
    code: "31_3330181",
    prof: "موسويان سيد علي اكبر",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس 202"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس 202"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330181,
    name: "ديناميك ماشين",
    code: "32_3330181",
    prof: "ناصري فر ناصر",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس 204"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس 204"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330182,
    name: "آز ديناميك ماشين و ارتعاشات",
    code: "31_3330182",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 3330182,
    name: "آز ديناميك ماشين و ارتعاشات",
    code: "32_3330182",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 3330182,
    name: "آز ديناميك ماشين و ارتعاشات",
    code: "33_3330182",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 3330182,
    name: "آز ديناميك ماشين و ارتعاشات",
    code: "34_3330182",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 3330182,
    name: "آز ديناميك ماشين و ارتعاشات",
    code: "35_3330182",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی مکانیک"}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 3330183,
    name: "ارتعاشات مكانيكي",
    code: "31_3330183",
    prof: "همائي نژاد محمد رضا",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 202"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330183,
    name: "ارتعاشات مكانيكي",
    code: "32_3330183",
    prof: "آزادي شهرام",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 204"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 204"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330185,
    name: "كنترل اتوماتيك",
    code: "31_3330185",
    prof: "نحوي علي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس 206"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس 206"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330185,
    name: "كنترل اتوماتيك",
    code: "32_3330185",
    prof: "غفاري علي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس 205"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس 205"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330186,
    name: "اندازه گيري وسيستم هاي كنترل",
    code: "31_3330186",
    prof: "همائي نژاد محمد رضا",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "كلاس 205"}
    ],
    examDate: "1405/04/21 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
  {
    id: 3330192,
    name: "طراحي مكانيزمها",
    code: "31_3330192",
    prof: "موسويان سيد علي اكبر",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 207"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 207"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330194,
    name: "مقاومت مصالح 3",
    code: "31_3330194",
    prof: "شرعيات محمد",
    units: 3,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "كلاس 307"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس 307"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330206,
    name: "مباني بينايي كامپيوتر",
    code: "31_3330206",
    prof: "نحوي علي",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس 205"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس 205"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330218,
    name: "مقدمه اي برآناتومي وفيزيك سيستم هاي بدن انسان",
    code: "31_3330218",
    prof: "رسولي آيسا",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 308"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 308"}
    ],
    examDate: "1405/04/08 13:30-16:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330219,
    name: "دانش مهندسي مواد",
    code: "31_3330219",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "كلاس 205"},
      {days: [4], start: 16.5, duration: 1.5, location: "كلاس 205"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330219,
    name: "دانش مهندسي مواد",
    code: "32_3330219",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "كلاس 206"},
      {days: [4], start: 16.5, duration: 1.5, location: "كلاس 206"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330222,
    name: "مهارت هاي نرم شغلي",
    code: "31_3330222",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [5], start: 16.5, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330228,
    name: "مباني مهندسي برق",
    code: "31_3330228",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس 202"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس 202"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 3330229,
    name: "هوش مصنوعي و تحول ديجيتال",
    code: "31_3330229",
    prof: "پوربگيان برزي مهدي",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس 205"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330230,
    name: "نقشه كشي صنعتي به كمك كامپيوتر",
    code: "31_3330230",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس 302"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330230,
    name: "نقشه كشي صنعتي به كمك كامپيوتر",
    code: "32_3330230",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "كلاس 302"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
  {
    id: 3330231,
    name: "روشهاي توليد و كارگاه",
    code: "31_3330231",
    prof: "ظهور مهدي",
    units: 3,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "كلاس 201"},
      {days: [5], start: 16.5, duration: 1.5, location: "كلاس 201"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330232,
    name: "كاربردهاي صنعتي باتري هاي الكترو شيميايي",
    code: "31_3330232",
    prof: "ترابي فرشاد",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس 207"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس 207"}
    ],
    examDate: "1405/04/09 13:30-16:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330233,
    name: "تكنولوژي ساخت افزايشي",
    code: "31_3330233",
    prof: "هدايتي رضا",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "كلاس 206"}
    ],
    examDate: "1405/04/21 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330234,
    name: "مهندسي به كمك كامپيوتر",
    code: "31_3330234",
    prof: "كارمزدي علي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس 207"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس 207"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3330235,
    name: "روش هاي بهينه سازي",
    code: "31_3330235",
    prof: "شربتدار مهكامه",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 306"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس 306"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3331003,
    name: "توربوماشين پيشرفته",
    code: "31_3331003",
    prof: "كارمزدي محسن",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس 302"},
      {days: [5], start: 10.5, duration: 2, location: ""}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3331004,
    name: "كاربرد پيشرفته هوش مصنوعي و تحول ديجيتال",
    code: "31_3331004",
    prof: "پوربگيان برزي مهدي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: ""},
      {days: [4], start: 10.5, duration: 2, location: ""}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3331048,
    name: "طراحي كلي نيروگاهها",
    code: "31_3331048",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس 302"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس 302"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3331060,
    name: "مكانيك محيط پيوسته",
    code: "31_3331060",
    prof: "شاه نظري محمد رضا",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: ""},
      {days: [5], start: 13.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3331064,
    name: "انتقال حرارت پيشرفته هدايت",
    code: "31_3331064",
    prof: "قاسمي مجيد",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 302"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس 302"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
  {
    id: 3331065,
    name: "انتقال حرارت پيشرفته جابجاي",
    code: "31_3331065",
    prof: "شهيديان آزاده",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: ""},
      {days: [5], start: 10.5, duration: 2, location: ""}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3331076,
    name: "ديناميك سيالات محاسباتي 1",
    code: "31_3331076",
    prof: "اشرفي زاده علي",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس 302"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس 302"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3331079,
    name: "سمينار",
    code: "31_3331079",
    prof: "اشرفي زاده علي",
    units: 2,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: ""}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 3331082,
    name: "جريانهاي دوفازي",
    code: "31_3331082",
    prof: "شمس مهرزاد",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 307"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس 307"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3331084,
    name: "مدلسازي جريانهاي مغشوش",
    code: "31_3331084",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: ""},
      {days: [4], start: 13.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3331094,
    name: "ترموديناميك پيشرفته",
    code: "31_3331094",
    prof: "آقانجفي سيروس",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: ""},
      {days: [4], start: 13.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3331137,
    name: "مكانيك سيالات درمحيط هاي متخلخل",
    code: "31_3331137",
    prof: "مجري افسانه",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 305"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس 305"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3333104,
    name: "رياضيات پيشرفته 1",
    code: "31_3333104",
    prof: "همائي نژاد محمد رضا",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس 301"},
      {days: [3], start: 7.5, duration: 1.5, location: "كلاس 301"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3333113,
    name: "روش اجزائ محدود1",
    code: "31_3333113",
    prof: "شاهاني امير رضا",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: ""},
      {days: [5], start: 10.5, duration: 2, location: ""}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3333115,
    name: "الاستيسيته",
    code: "31_3333115",
    prof: "هدايتي رضا",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: ""},
      {days: [5], start: 13.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
  {
    id: 3333132,
    name: "كنترل پيشرفته 2",
    code: "31_3333132",
    prof: "همائي نژاد محمد رضا",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: ""},
      {days: [3], start: 10.5, duration: 2, location: ""}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
{
    id: 3333136,
    name: "ارتعاشات پيشرفته غيرخطي",
    code: "31_3333136",
    prof: "جعفري علي اصغر",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس نقشه كشي( طبقه اول)"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس نقشه كشي( طبقه اول)"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3333137,
    name: "ارتعاشات پيشرفته-ارتعاشات سيستم هاي ممتد",
    code: "31_3333137",
    prof: "جعفري علي اصغر",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس 306"},
      {days: [3], start: 7.5, duration: 1.5, location: "كلاس 306"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3333147,
    name: "سيستمهاي كنترل پيشرفته 1",
    code: "31_3333147",
    prof: "كارمزدي علي",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 301"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 301"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3333157,
    name: "سمينار",
    code: "31_3333157",
    prof: "ناصري فر ناصر",
    units: 2,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: ""}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 3333178,
    name: "واقعيت مجازي",
    code: "31_3333178",
    prof: "نحوي علي",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: ""},
      {days: [5], start: 15, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3333217,
    name: "كنترل غير خطي",
    code: "31_3333217",
    prof: "غفاري علي",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 302"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 302"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3333219,
    name: "مكانيك شكست",
    code: "31_3333219",
    prof: "شاهاني امير رضا",
    units: 3,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "كلاس 305"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس 305"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
  {
    id: 3333230,
    name: "مكانيك سازه هاي پيشرفته وهوشمند",
    code: "31_3333230",
    prof: "خليلي سيد محمدرضا",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "سالن سمينار دكتري"},
      {days: [5], start: 9, duration: 1.5, location: "سالن سمينار دكتري"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3333233,
    name: "كنترل دررباتيك",
    code: "31_3333233",
    prof: "موسويان سيد علي اكبر",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: ""},
      {days: [5], start: 9, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3333253,
    name: "كنترل بهينه",
    code: "33_3333253",
    prof: "ساداتي سيدحسين",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: ""},
      {days: [4], start: 13.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/21 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3333253,
    name: "كنترل بهينه",
    code: "97_3333253",
    prof: "كاظمي رضا",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 209"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 209"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3339018,
    name: "رياضيات پيشرفته 1",
    code: "31_3339018",
    prof: "رسولي آيسا",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس 305"},
      {days: [3], start: 7.5, duration: 1.5, location: "كلاس 305"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3339021,
    name: "متالوژي درتوليد",
    code: "39_3339021",
    prof: "عسگري مسعود",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: ""},
      {days: [4], start: 13.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3339022,
    name: "روش اجزامحدود1",
    code: "39_3339022",
    prof: "جلالي آقچاي عبدالحسين",
    units: 3,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: ""},
      {days: [5], start: 9, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3339027,
    name: "ابزارشناسي وماشين كاري",
    code: "39_3339027",
    prof: "وحدتي مهرداد",
    units: 3,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "كلاس 301"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس 301"}
    ],
    examDate: "1405/04/21 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3339033,
    name: "طراحي وساخت بكمك كامپيوتر پيشرفته",
    code: "39_3339033",
    prof: "نخودچي سهيل",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس 310"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس 310"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
  {
    id: 3339040,
    name: "بهينه سازي در طراحي وتوليد",
    code: "39_3339040",
    prof: "قريشي سيد مجيد",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس 306"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس 306"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3339045,
    name: "سمينار",
    code: "39_3339045",
    prof: "زماني اشني جمال",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: ""}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
{
    id: 3339049,
    name: "برنامه ريزي وكنترل توليد وكيفيت",
    code: "39_3339049",
    prof: "كازروني مهرداد",
    units: 3,
    sessions: [
      {days: [3], start: 16.5, duration: 1.5, location: ""},
      {days: [4], start: 15, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3366032,
    name: "كنترل سيستم هاي پيوسته",
    code: "66_3366032",
    prof: "نجفي اردكاني علي",
    units: 3,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: ""},
      {days: [3], start: 16.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/14 13:30-16:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3368016,
    name: "بيومكانيك ارتوپدي",
    code: "68_3368016",
    prof: "هدايتي رضا",
    units: 3,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: ""},
      {days: [5], start: 16.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3368031,
    name: "مكانيك سيالات زيستي",
    code: "68_3368031",
    prof: "ستاري اميرمحمد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: ""},
      {days: [5], start: 10.5, duration: 2, location: ""}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3397006,
    name: "ديناميك خودرووآز",
    code: "97_3397006",
    prof: "كاظمي رضا",
    units: 3,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: ""},
      {days: [5], start: 9, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3397025,
    name: "تئوري ورقها و پوسته هاوكاربرد",
    code: "97_3397025",
    prof: "شرعيات محمد",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: ""},
      {days: [3], start: 10.5, duration: 2, location: ""}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3397037,
    name: "طراحي سيستمهاي انتقال قدرت",
    code: "97_3397037",
    prof: "شامخي امير حسين",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: ""},
      {days: [4], start: 10.5, duration: 2, location: ""}
    ],
    examDate: "1405/04/21 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
  {
    id: 3397043,
    name: "سمينار",
    code: "97_3397043",
    prof: "شرعيات محمد",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: ""}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 3397048,
    name: "مشابه سازي موتورهاي پيستوني",
    code: "97_3397048",
    prof: "شامخي امير حسين",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: ""},
      {days: [4], start: 13.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 13,
    gender: "مختلط"
  },
{
    id: 3397053,
    name: "كنترل پيشرفته 2",
    code: "97_3397053",
    prof: "آزادي شهرام",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: ""},
      {days: [5], start: 13.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 8,
    gender: "مختلط"
  },
{
    id: 3398003,
    name: "برنامه ريزي رياضي پيشرفته",
    code: "98_3398003",
    prof: "صيادي حسين",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: ""},
      {days: [4], start: 10.5, duration: 2, location: ""}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3398006,
    name: "قابليت اطمينان و تحليل ريسك",
    code: "98_3398006",
    prof: "بهبهاني نيا سيد علي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: ""},
      {days: [4], start: 13.5, duration: 1.5, location: ""}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3398025,
    name: "سمينار",
    code: "98_3398025",
    prof: "ترابي فرشاد",
    units: 2,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: ""}
    ],
    examDate: "",
    department: "دانشکده مهندسی مکانیک",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 3398055,
    name: "سيستم هاي توليد همزمان قدرت وحرارت",
    code: "98_3398055",
    prof: "عميد پور مجيد",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس 301"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس 301"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3398060,
    name: "طراحي پايه و تفصيلي فرآيندهاي شيميايي",
    code: "98_3398060",
    prof: "زماني پدرام مونا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "سمعي بصري كارشناسي"},
      {days: [4], start: 9, duration: 1.5, location: "سمعي بصري كارشناسي"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
{
    id: 3398072,
    name: "انرژي باد پيشرفته",
    code: "98_3398072",
    prof: "ترابي فرشاد",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس 301"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس 301"}
    ],
    examDate: "1405/04/21 08:00-10:30",
    department: "دانشکده مهندسی مکانیک",
    capacity: 7,
    gender: "مختلط"
  },
// Sanye
{
    id: 6660004,
    name: "سمينار",
    code: "60_6660004",
    prof: "آقايي عبداله",
    units: 2,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660010,
    name: "سيستم هاي صف",
    code: "60_6660010",
    prof: "آقايي عبداله",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6660025,
    name: "برنامه ريزي متغيرهاي صحيح",
    code: "60_6660025",
    prof: "حسيني نژاد سيدجواد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6660029,
    name: "تصميم گيري با معيارهاي چندگانه",
    code: "60_6660029",
    prof: "خوش الحان فريد",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/21 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6660064,
    name: "اصول حسابداري وهزينه يابي",
    code: "60_6660064",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/07 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660066,
    name: "ارزيابي كاروزمان",
    code: "60_6660066",
    prof: "سلمان زاده حامد",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660067,
    name: "طرح ريزي واحدهاي صنعتي",
    code: "60_6660067",
    prof: "رحماني دنيا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
  {
    id: 6660068,
    name: "برنامه ريزي كنترل توليد موجودي هاي 1",
    code: "60_6660068",
    prof: "ستاك مصطفي",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660071,
    name: "تحقيق درعمليات 1",
    code: "60_6660071",
    prof: "خوش الحان فريد",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660077,
    name: "مديريت مالي",
    code: "60_6660077",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660078,
    name: "مونتاژ مكانيكي",
    code: "60_6660078",
    prof: "سلمان زاده حامد",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660082,
    name: "اصول مديريت و تئوري سازمان",
    code: "60_6660082",
    prof: "فرهادي سجاد",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/14 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660100,
    name: "تحقيق درعمليات2",
    code: "60_6660100",
    prof: "رمضانيان رضا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660102,
    name: "مباني مهندسي برق",
    code: "60_6660102",
    prof: "يارمند روح اله",
    units: 3,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 16.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660103,
    name: "آزمباني برق",
    code: "60_6660103",
    prof: "عباس زاده كريم",
    units: 1,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 6660103,
    name: "آزمباني برق",
    code: "61_6660103",
    prof: "عباس زاده كريم",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 12,
    gender: "مختلط"
  },
{
    id: 6660107,
    name: "برنامه نويسي كامپيوتر",
    code: "60_6660107",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [5], start: 15, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660119,
    name: "سمينار 1",
    code: "60_6660119",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 50,
    gender: "مختلط"
  },
  {
    id: 6660120,
    name: "سمينار 2",
    code: "60_6660120",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 50,
    gender: "مختلط"
  },
{
    id: 6660130,
    name: "رساله دكترا",
    code: "60_6660130",
    prof: "اساتيد گروه آموزشي",
    units: 24,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 60,
    gender: "مختلط"
  },
{
    id: 6660131,
    name: "استاتيك ومقاومت مصالح",
    code: "60_6660131",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [5], start: 16.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/08 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660132,
    name: "جبرخطي",
    code: "60_6660132",
    prof: "پروانه مسيحا هاشم",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660136,
    name: "مديريت وكنترل پروژه",
    code: "60_6660136",
    prof: "روغنيان عماد",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660139,
    name: "مديريت كيفيت و بهره وري",
    code: "60_6660139",
    prof: "صفايي ناصر",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 15, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660140,
    name: "سيستم هاي اطلاعات مديريت",
    code: "60_6660140",
    prof: "حسيني نژاد سيدجواد",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660150,
    name: "اصول بازاريابي",
    code: "60_6660150",
    prof: "نصيري سپيده",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660166,
    name: "برنامه ريزي توليد",
    code: "60_6660166",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [5], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/18 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660173,
    name: "امتحان جامع دكتري 1",
    code: "60_6660173",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 20,
    gender: "مختلط"
  },
{
    id: 6660175,
    name: "پايان نامه",
    code: "01_6660175",
    prof: "اساتيد گروه آموزشي",
    units: 6,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 6660175,
    name: "پايان نامه",
    code: "60_6660175",
    prof: "اساتيد گروه آموزشي",
    units: 6,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 70,
    gender: "مختلط"
  },
{
    id: 6660175,
    name: "پايان نامه",
    code: "61_6660175",
    prof: "اساتيد گروه آموزشي",
    units: 6,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 3,
    gender: "مختلط"
  },
  {
    id: 6660198,
    name: "زنجيره تامين سبز و پايدار",
    code: "60_6660198",
    prof: "روغنيان عماد",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6660210,
    name: "داده كاوي، مدل ها، الگوريتم ها و كاربردها",
    code: "60_6660210",
    prof: "روغنيان عماد",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6660217,
    name: "بازاريابي تحليلي",
    code: "60_6660217",
    prof: "حسيني منيره",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/07 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660219,
    name: "استراتژيهاي توليد و خدمات",
    code: "60_6660219",
    prof: "خوش الحان فريد",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6660221,
    name: "تحليل داده و اطلاعات",
    code: "60_6660221",
    prof: "حميدي حجت اله",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660228,
    name: "اقتصاد كلان",
    code: "61_6660228",
    prof: "ميرزايي قزااني مجيد",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/16 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 30,
    gender: "مختلط"
  },
{
    id: 6660240,
    name: "هوش مصنوعي و تحول ديجيتال",
    code: "60_6660240",
    prof: "زاهدي محمدهادي",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6660260,
    name: "طراحي انبار، جابجايي مواد و بسته بندي",
    code: "60_6660260",
    prof: "سلمان زاده حامد",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/20 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6662015,
    name: "مدلسازي پويايي هاي سيستم",
    code: "60_6662015",
    prof: "صفايي ناصر",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6662021,
    name: "سمينار",
    code: "60_6662021",
    prof: "رمضانيان رضا",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6662029,
    name: "انفورماتيك در سلامت",
    code: "60_6662029",
    prof: "نصيري سپيده",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 6662033,
    name: "داده كاوي در سلامت",
    code: "60_6662033",
    prof: "ستاك مصطفي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/09 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6662040,
    name: "شبكه و مكان گسسته در سلامت",
    code: "60_6662040",
    prof: "حسيني نژاد سيدجواد",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6662042,
    name: "كارورزي مهندسي سيستم هاي سلامت 1",
    code: "60_6662042",
    prof: "رحماني دنيا",
    units: 0.5,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6662043,
    name: "كارورزي مهندسي سيستم هاي سلامت 2",
    code: "60_6662043",
    prof: "رحماني دنيا",
    units: 0.5,
    sessions: [],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6662053,
    name: "مديريت ريسك",
    code: "60_6662053",
    prof: "رحماني دنيا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6684001,
    name: "بازاريابي اينترنتي",
    code: "60_6684001",
    prof: "حسيني منيره",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6684002,
    name: "سيستمهاي پرداخت الكترونيكي",
    code: "60_6684002",
    prof: "محمدي شهريار",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6684011,
    name: "روش تحقيق و سمينار",
    code: "60_6684011",
    prof: "حسيني منيره",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 35,
    gender: "مختلط"
  },
{
    id: 6684019,
    name: "انباره هاي داده و داده كاوي",
    code: "60_6684019",
    prof: "زاهدي محمدهادي",
    units: 3,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 15, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/17 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6684023,
    name: "هوش تجاري",
    code: "60_6684023",
    prof: "تارخ محمد جعفر",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/20 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6684069,
    name: "تجارت الكترونيكي سيار و محاسبات فراگير",
    code: "60_6684069",
    prof: "محمدي شهريار",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 6684092,
    name: "مديريت ارتباط الكترونيكي با مشتري (ECRM)",
    code: "60_6684092",
    prof: "تارخ محمد جعفر",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/14 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6684094,
    name: "برنامه ريزي منابع سازمان",
    code: "60_6684094",
    prof: "حميدي حجت اله",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6684100,
    name: "رايانش نرم و ملهم از زيست",
    code: "60_6684100",
    prof: "زاهدي محمدهادي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 16.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6684102,
    name: "تحليل شبكه هاي اطلاعات",
    code: "60_6684102",
    prof: "حميدي حجت اله",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [3], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/13 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6686016,
    name: "مديريت منابع انساني",
    code: "60_6686016",
    prof: "صفايي ناصر",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6686059,
    name: "قيمت گذاري",
    code: "60_6686059",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/08 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6686072,
    name: "اصول كارآفريني",
    code: "60_6686072",
    prof: "فرهادي سجاد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 10.5, duration: 2, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/10 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6688001,
    name: "فرآيندهاي تصادفي",
    code: "60_6688001",
    prof: "ميرزايي قزااني مجيد",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/15 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6688006,
    name: "مديريت وتحليل ريسك مالي",
    code: "60_6688006",
    prof: "ابراهيمي سيد بابك",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 15, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/08 10:30-12:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6688008,
    name: "مديريت سرمايه گذاري",
    code: "60_6688008",
    prof: "ميرزايي قزااني مجيد",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "1405/04/21 08:00-10:30",
    department: "دانشکده مهندسی صنایع",
    capacity: 15,
    gender: "مختلط"
  },
{
    id: 6688015,
    name: "سمينار مهندسي مالي",
    code: "60_6688015",
    prof: "فرهادي سجاد",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مهندسی صنایع"}
    ],
    examDate: "",
    department: "دانشکده مهندسی صنایع",
    capacity: 25,
    gender: "مختلط"
  }
,
// Mavad

{
    id: 9912027,
    name: "اصول انجماد و ريخته گري مواد",
    code: "99_9912027",
    prof: "خسروشاهي زهرا",
    units: 2,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشکده مهندسی و علم مواد"},
      {days: [3], start: 15, duration: 1.5, location: "دانشکده مهندسی و علم مواد"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی و علم مواد",
    capacity: 45,
    gender: "مختلط"
  },
{
    id: 9912029,
    name: "اصول مهندسي پليمر",
    code: "99_9912029",
    prof: "خسروشاهي زهرا",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده مهندسی و علم مواد"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده مهندسی و علم مواد"}
    ],
    examDate: "1405/04/07 08:00-10:30",
    department: "دانشکده مهندسی و علم مواد",
    capacity: 45,
    gender: "مختلط"
  },
{
    id: 9912035,
    name: "خواص الكتروني و مغناطيسي مواد",
    code: "99_9912035",
    prof: "سيادتي سيد محمد حسين",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی و علم مواد"}
    ],
    examDate: "1405/04/13 08:00-10:30",
    department: "دانشکده مهندسی و علم مواد",
    capacity: 45,
    gender: "مختلط"
  },
{
    id: 9912036,
    name: "اصول مهندسي سراميك",
    code: "99_9912036",
    prof: "قنادي صابر",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی و علم مواد"},
      {days: [4], start: 9, duration: 1.5, location: "دانشکده مهندسی و علم مواد"}
    ],
    examDate: "1405/04/09 08:00-10:30",
    department: "دانشکده مهندسی و علم مواد",
    capacity: 45,
    gender: "مختلط"
  },
{
    id: 9912037,
    name: "طراحي و انتخاب مواد مهندسي",
    code: "99_9912037",
    prof: "اسلامي فارساني رضا",
    units: 2,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی و علم مواد"}
    ],
    examDate: "1405/04/17 08:00-10:30",
    department: "دانشکده مهندسی و علم مواد",
    capacity: 45,
    gender: "مختلط"
  },
{
    id: 9912080,
    name: "بلورشناسي",
    code: "99_9912080",
    prof: "خسروشاهي زهرا",
    units: 2,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "دانشکده مهندسی و علم مواد"}
    ],
    examDate: "1405/04/16 08:00-10:30",
    department: "دانشکده مهندسی و علم مواد",
    capacity: 45,
    gender: "مختلط"
  },
{
    id: 9912097,
    name: "رياضي مهندسي",
    code: "99_9912097",
    prof: "منتظري هدش عباس",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "دانشکده مهندسی و علم مواد"},
      {days: [3], start: 10.5, duration: 2, location: "دانشکده مهندسی و علم مواد"}
    ],
    examDate: "1405/04/10 08:00-10:30",
    department: "دانشکده مهندسی و علم مواد",
    capacity: 45,
    gender: "مختلط"
  },
{
    id: 9914004,
    name: "ترموديناميك مواد 1",
    code: "99_9914004",
    prof: "حسن زاده يزدي نفيسه",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "دانشکده مهندسی و علم مواد"},
      {days: [3], start: 9, duration: 1.5, location: "دانشکده مهندسی و علم مواد"}
    ],
    examDate: "1405/04/08 08:00-10:30",
    department: "دانشکده مهندسی و علم مواد",
    capacity: 45,
    gender: "مختلط"
  },
{
    id: 9914007,
    name: "خواص مكانيكي مواد 1",
    code: "99_9914007",
    prof: "اقائي خفري مهرداد",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "دانشکده مهندسی و علم مواد"}
    ],
    examDate: "1405/04/06 08:00-10:30",
    department: "دانشکده مهندسی و علم مواد",
    capacity: 45,
    gender: "مختلط"
  },
{
    id: 9914036,
    name: "اقتصاد و مديريت صنعتي",
    code: "99_9914036",
    prof: "اقائي خفري مهرداد",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مهندسی و علم مواد"}
    ],
    examDate: "1405/04/15 08:00-10:30",
    department: "دانشکده مهندسی و علم مواد",
    capacity: 45,
    gender: "مختلط"
  },
{
    id: 9914058,
    name: "استاتيك",
    code: "99_9914058",
    prof: "نارويي كيوان",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "دانشکده مهندسی و علم مواد"},
      {days: [4], start: 7.5, duration: 1.5, location: "دانشکده مهندسی و علم مواد"}
    ],
    examDate: "1405/04/21 08:00-10:30",
    department: "دانشکده مهندسی و علم مواد",
    capacity: 45,
    gender: "مختلط"
  }
,
// Omomi
{
    id: 5510001,
    name: "تربيت بدني",
    code: "51_5510001",
    prof: "لطيفي حجت اله",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "52_5510001",
    prof: "لطيفي حجت اله",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "53_5510001",
    prof: "لطيفي حجت اله",
    units: 1,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "54_5510001",
    prof: "لطيفي حجت اله",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "55_5510001",
    prof: "خنجري ياسر",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "56_5510001",
    prof: "خنجري ياسر",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "57_5510001",
    prof: "خنجري ياسر",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "58_5510001",
    prof: "خنجري ياسر",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "59_5510001",
    prof: "خنجري ياسر",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "60_5510001",
    prof: "خنجري ياسر",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
  {
    id: 5510001,
    name: "تربيت بدني",
    code: "61_5510001",
    prof: "خنجري ياسر",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "62_5510001",
    prof: "خداداد كاشي شعله",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "زن"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "63_5510001",
    prof: "خداداد كاشي شعله",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "زن"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "64_5510001",
    prof: "خداداد كاشي شعله",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "زن"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "65_5510001",
    prof: "خداداد كاشي شعله",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "زن"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "66_5510001",
    prof: "خضري عبدالرحمن",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "67_5510001",
    prof: "خضري عبدالرحمن",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "دانشكده برق"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "68_5510001",
    prof: "خضري عبدالرحمن",
    units: 1,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "69_5510001",
    prof: "خضري عبدالرحمن",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشكده برق"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "70_5510001",
    prof: "خنجري ياسر",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "مرد"
  },
  {
    id: 5510001,
    name: "تربيت بدني",
    code: "71_5510001",
    prof: "محبي فرشته",
    units: 1,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "زن"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "72_5510001",
    prof: "محبي فرشته",
    units: 1,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "زن"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "73_5510001",
    prof: "محبي فرشته",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "زن"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "74_5510001",
    prof: "كريمي ترانه",
    units: 1,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "زن"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "75_5510001",
    prof: "كريمي ترانه",
    units: 1,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "زن"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "76_5510001",
    prof: "كريمي ترانه",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "زن"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "77_5510001",
    prof: "كريمي ترانه",
    units: 1,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "زن"
  },
{
    id: 5510001,
    name: "تربيت بدني",
    code: "78_5510001",
    prof: "كريمي ترانه",
    units: 1,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 16,
    gender: "زن"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "51_5510002",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "52_5510002",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
  {
    id: 5510002,
    name: "ورزش 1",
    code: "53_5510002",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "54_5510002",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "55_5510002",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "56_5510002",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "57_5510002",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "58_5510002",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "59_5510002",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "60_5510002",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "61_5510002",
    prof: "لطيفي حجت اله",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "62_5510002",
    prof: "لطيفي حجت اله",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
  {
    id: 5510002,
    name: "ورزش 1",
    code: "63_5510002",
    prof: "لطيفي حجت اله",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "64_5510002",
    prof: "لطيفي حجت اله",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "65_5510002",
    prof: "خنجري ياسر",
    units: 1,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "66_5510002",
    prof: "خنجري ياسر",
    units: 1,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "67_5510002",
    prof: "خنجري ياسر",
    units: 1,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "68_5510002",
    prof: "خنجري ياسر",
    units: 1,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "69_5510002",
    prof: "خداداد كاشي شعله",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "زن"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "70_5510002",
    prof: "خداداد كاشي شعله",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "زن"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "71_5510002",
    prof: "خداداد كاشي شعله",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "زن"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "72_5510002",
    prof: "خداداد كاشي شعله",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "زن"
  },
  {
    id: 5510002,
    name: "ورزش 1",
    code: "73_5510002",
    prof: "خداداد كاشي شعله",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "زن"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "74_5510002",
    prof: "خداداد كاشي شعله",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "زن"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "75_5510002",
    prof: "خداداد كاشي شعله",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "زن"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "76_5510002",
    prof: "محبي فرشته",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "زن"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "77_5510002",
    prof: "كريمي ترانه",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "زن"
  },
{
    id: 5510002,
    name: "ورزش 1",
    code: "78_5510002",
    prof: "خنجري ياسر",
    units: 1,
    sessions: [
      {days: [3], start: 16.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "",
    department: "عمومی",
    capacity: 12,
    gender: "مرد"
  },
{
    id: 5510003,
    name: "تربيت بدني ويژه",
    code: "51_5510003",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
    ],
    examDate: "1405/04/15 13:30-16:30",
    department: "عمومی",
    capacity: 16,
    gender: "مختلط"
  },
{
    id: 5510004,
    name: "ورزش ويژه",
    code: "51_5510004",
    prof: "خنجري ياسر",
    units: 1,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 5514003,
    name: "انقلاب اسلامي وريشه هاي آن",
    code: "51_5514003",
    prof: "امامي محمد مهدي",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/17 13:30-16:30",
    department: "عمومی",
    capacity: 30,
    gender: "مرد"
  },
{
    id: 5514003,
    name: "انقلاب اسلامي وريشه هاي آن",
    code: "52_5514003",
    prof: "اساتيد گروه آموزشي (تقديري)",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "دانشكده برق"}
    ],
    examDate: "1405/04/17 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514003,
    name: "انقلاب اسلامي وريشه هاي آن",
    code: "53_5514003",
    prof: "اساتيد گروه آموزشي (غلامي)",
    units: 2,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/17 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514003,
    name: "انقلاب اسلامي وريشه هاي آن",
    code: "54_5514003",
    prof: "بابايي محمدحسن",
    units: 2,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/17 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514003,
    name: "انقلاب اسلامي وريشه هاي آن",
    code: "55_5514003",
    prof: "طهماسبي محمد",
    units: 2,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/17 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514003,
    name: "انقلاب اسلامي وريشه هاي آن",
    code: "56_5514003",
    prof: "عبداللهي عباس",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/17 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514003,
    name: "انقلاب اسلامي وريشه هاي آن",
    code: "57_5514003",
    prof: "عبداللهي عباس",
    units: 2,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/17 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514003,
    name: "انقلاب اسلامي وريشه هاي آن",
    code: "58_5514003",
    prof: "طهماسبي محمد",
    units: 2,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/17 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
  {
    id: 5514006,
    name: "تفسيرموضوعي قرآن",
    code: "51_5514006",
    prof: "كاظم توري سعيده",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514006,
    name: "تفسيرموضوعي قرآن",
    code: "52_5514006",
    prof: "باباجان‌نژاد چاري محمدمهدي",
    units: 2,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514006,
    name: "تفسيرموضوعي قرآن",
    code: "53_5514006",
    prof: "باباجان‌نژاد چاري محمدمهدي",
    units: 2,
    sessions: [
      {days: [5], start: 16.5, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514006,
    name: "تفسيرموضوعي قرآن",
    code: "54_5514006",
    prof: "نوري حميد رضا",
    units: 2,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514006,
    name: "تفسيرموضوعي قرآن",
    code: "55_5514006",
    prof: "نوري حميد رضا",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514006,
    name: "تفسيرموضوعي قرآن",
    code: "56_5514006",
    prof: "اشتري ماهيني ليلا",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514006,
    name: "تفسيرموضوعي قرآن",
    code: "57_5514006",
    prof: "نادري مريم",
    units: 2,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514006,
    name: "تفسيرموضوعي قرآن",
    code: "59_5514006",
    prof: "اساتيد گروه آموزشي (مختاري)",
    units: 2,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
  {
    id: 5514006,
    name: "تفسيرموضوعي قرآن",
    code: "60_5514006",
    prof: "اساتيد گروه آموزشي (كاملي)",
    units: 2,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514006,
    name: "تفسيرموضوعي قرآن",
    code: "61_5514006",
    prof: "اساتيد گروه آموزشي (مختاري)",
    units: 2,
    sessions: [
      {days: [5], start: 16.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514006,
    name: "تفسيرموضوعي قرآن",
    code: "62_5514006",
    prof: "صادقي معصومه",
    units: 2,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514006,
    name: "تفسيرموضوعي قرآن",
    code: "63_5514006",
    prof: "صادقي معصومه",
    units: 2,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/13 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514011,
    name: "حقوق اجتماعي وسياسي دراسلام",
    code: "51_5514011",
    prof: "نوري حميد رضا",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/09 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514011,
    name: "حقوق اجتماعي وسياسي دراسلام",
    code: "52_5514011",
    prof: "نوري حميد رضا",
    units: 2,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/09 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514011,
    name: "حقوق اجتماعي وسياسي دراسلام",
    code: "53_5514011",
    prof: "نوري حميد رضا",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/09 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514014,
    name: "تاريخ تمدن فرهنگ و تمدن اسلامي",
    code: "51_5514014",
    prof: "بابايي محمدحسن",
    units: 2,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/15 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514014,
    name: "تاريخ تمدن فرهنگ و تمدن اسلامي",
    code: "52_5514014",
    prof: "سعيدي نسب تورج",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/15 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514014,
    name: "تاريخ تمدن فرهنگ و تمدن اسلامي",
    code: "53_5514014",
    prof: "سعيدي نسب تورج",
    units: 2,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/15 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514015,
    name: "آيين زندگي و اخلاق كاربردي",
    code: "51_5514015",
    prof: "منصوري بيژن",
    units: 2,
    sessions: [
      {days: [4], start: 16.5, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/20 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514015,
    name: "آيين زندگي و اخلاق كاربردي",
    code: "52_5514015",
    prof: "حقيقت طلب سكينه",
    units: 2,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/20 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514015,
    name: "آيين زندگي و اخلاق كاربردي",
    code: "53_5514015",
    prof: "حقيقت طلب سكينه",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/20 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514015,
    name: "آيين زندگي و اخلاق كاربردي",
    code: "54_5514015",
    prof: "موسوي گرمارودي رويا",
    units: 2,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/20 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  }
  ,
  {
    id: 5514015,
    name: "آيين زندگي و اخلاق كاربردي",
    code: "55_5514015",
    prof: "نوروزي مهدي",
    units: 2,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/20 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514015,
    name: "آيين زندگي و اخلاق كاربردي",
    code: "56_5514015",
    prof: "نوروزي مهدي",
    units: 2,
    sessions: [
      {days: [5], start: 16.5, duration: 1.5, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/20 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514015,
    name: "آيين زندگي و اخلاق كاربردي",
    code: "57_5514015",
    prof: "موسوي سيدعلي محمد",
    units: 2,
    sessions: [
      {days: [5], start: 16.5, duration: 1.5, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/20 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514016,
    name: "دانش خانواده وجمعيت",
    code: "51_5514016",
    prof: "منصوري بيژن",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514016,
    name: "دانش خانواده وجمعيت",
    code: "52_5514016",
    prof: "مهدوي مجيد",
    units: 2,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514016,
    name: "دانش خانواده وجمعيت",
    code: "53_5514016",
    prof: "حقيقت طلب سكينه",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514016,
    name: "دانش خانواده وجمعيت",
    code: "54_5514016",
    prof: "مرتضايي بهزاد",
    units: 2,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
  {
    id: 5514016,
    name: "دانش خانواده وجمعيت",
    code: "55_5514016",
    prof: "مرتضايي بهزاد",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514016,
    name: "دانش خانواده وجمعيت",
    code: "56_5514016",
    prof: "حقيقت طلب سكينه",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514016,
    name: "دانش خانواده وجمعيت",
    code: "57_5514016",
    prof: "حقيقت طلب سكينه",
    units: 2,
    sessions: [
      {days: [4], start: 16.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514016,
    name: "دانش خانواده وجمعيت",
    code: "58_5514016",
    prof: "اكبري سكينه",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514016,
    name: "دانش خانواده وجمعيت",
    code: "59_5514016",
    prof: "مشهدي نجميه السادات",
    units: 2,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514016,
    name: "دانش خانواده وجمعيت",
    code: "60_5514016",
    prof: "مشهدي نجميه السادات",
    units: 2,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514016,
    name: "دانش خانواده وجمعيت",
    code: "61_5514016",
    prof: "حقيقت طلب سكينه",
    units: 2,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
  {
    id: 5514016,
    name: "دانش خانواده وجمعيت",
    code: "62_5514016",
    prof: "موسوي سيدعلي محمد",
    units: 2,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514016,
    name: "دانش خانواده وجمعيت",
    code: "63_5514016",
    prof: "موسوي سيدعلي محمد",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514016,
    name: "دانش خانواده وجمعيت",
    code: "64_5514016",
    prof: "موسوي سيدعلي محمد",
    units: 2,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/07 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514017,
    name: "تاريخ تحليلي صدر اسلام",
    code: "51_5514017",
    prof: "امامي محمد مهدي",
    units: 2,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/15 13:30-16:30",
    department: "عمومی",
    capacity: 30,
    gender: "مرد"
  },
{
    id: 5514017,
    name: "تاريخ تحليلي صدر اسلام",
    code: "52_5514017",
    prof: "امامي محمد مهدي",
    units: 2,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/15 13:30-16:30",
    department: "عمومی",
    capacity: 30,
    gender: "مرد"
  },
{
    id: 5514017,
    name: "تاريخ تحليلي صدر اسلام",
    code: "53_5514017",
    prof: "امامي محمد مهدي",
    units: 2,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/15 13:30-16:30",
    department: "عمومی",
    capacity: 30,
    gender: "مرد"
  },
  {
    id: 5514017,
    name: "تاريخ تحليلي صدر اسلام",
    code: "55_5514017",
    prof: "كاظم توري سعيده",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/15 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514017,
    name: "تاريخ تحليلي صدر اسلام",
    code: "56_5514017",
    prof: "نادري مريم",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/15 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514017,
    name: "تاريخ تحليلي صدر اسلام",
    code: "57_5514017",
    prof: "موسوي گرمارودي رويا",
    units: 2,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/15 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514017,
    name: "تاريخ تحليلي صدر اسلام",
    code: "58_5514017",
    prof: "منصوري بيژن",
    units: 2,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/15 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514128,
    name: "انديشه اسلامي 1",
    code: "51_5514128",
    prof: "بلخاري قهي حسين",
    units: 2,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/09 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514128,
    name: "انديشه اسلامي 1",
    code: "52_5514128",
    prof: "اساتيد گروه آموزشي (آرپناهي)",
    units: 2,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/09 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
  {
    id: 5514128,
    name: "انديشه اسلامي 1",
    code: "53_5514128",
    prof: "آقابيگي سعيد",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/09 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514128,
    name: "انديشه اسلامي 1",
    code: "54_5514128",
    prof: "كهنداني تفرشي مهناز",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/09 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514128,
    name: "انديشه اسلامي 1",
    code: "55_5514128",
    prof: "شيري امير مهدي",
    units: 2,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/09 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514128,
    name: "انديشه اسلامي 1",
    code: "56_5514128",
    prof: "شيري امير مهدي",
    units: 2,
    sessions: [
      {days: [3], start: 16.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/09 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514128,
    name: "انديشه اسلامي 1",
    code: "59_5514128",
    prof: "موسوي سيدعلي محمد",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/09 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514128,
    name: "انديشه اسلامي 1",
    code: "60_5514128",
    prof: "موسوي سيدعلي محمد",
    units: 2,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/09 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
  {
    id: 5514129,
    name: "انديشه اسلامي 2",
    code: "51_5514129",
    prof: "بلخاري قهي حسين",
    units: 2,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514129,
    name: "انديشه اسلامي 2",
    code: "52_5514129",
    prof: "بلخاري قهي حسين",
    units: 2,
    sessions: [
      {days: [5], start: 16.5, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514129,
    name: "انديشه اسلامي 2",
    code: "53_5514129",
    prof: "اساتيد گروه آموزشي (محمودزاده)",
    units: 2,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "دانشكده برق"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514129,
    name: "انديشه اسلامي 2",
    code: "54_5514129",
    prof: "اساتيد گروه آموزشي (محمودزاده)",
    units: 2,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514129,
    name: "انديشه اسلامي 2",
    code: "55_5514129",
    prof: "اساتيد گروه آموزشي (آرپناهي)",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514129,
    name: "انديشه اسلامي 2",
    code: "56_5514129",
    prof: "آقابيگي سعيد",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514129,
    name: "انديشه اسلامي 2",
    code: "57_5514129",
    prof: "كهنداني تفرشي مهناز",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
  {
    id: 5514129,
    name: "انديشه اسلامي 2",
    code: "58_5514129",
    prof: "شيري امير مهدي",
    units: 2,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514129,
    name: "انديشه اسلامي 2",
    code: "59_5514129",
    prof: "شيري امير مهدي",
    units: 2,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514129,
    name: "انديشه اسلامي 2",
    code: "60_5514129",
    prof: "اساتيد گروه آموزشي (مختاري)",
    units: 2,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514129,
    name: "انديشه اسلامي 2",
    code: "61_5514129",
    prof: "اساتيد گروه آموزشي (كاملي)",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514129,
    name: "انديشه اسلامي 2",
    code: "62_5514129",
    prof: "منصوري بيژن",
    units: 2,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  },
{
    id: 5514129,
    name: "انديشه اسلامي 2",
    code: "63_5514129",
    prof: "منصوري بيژن",
    units: 2,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "زن"
  },
{
    id: 5514129,
    name: "انديشه اسلامي 2",
    code: "64_5514129",
    prof: "منصوري بيژن",
    units: 2,
    sessions: [
      {days: [3], start: 16.5, duration: 1.5, location: "مكانيك-كلاس"}
    ],
    examDate: "1405/04/10 13:30-16:30",
    department: "عمومی",
    capacity: 40,
    gender: "مرد"
  }

]
