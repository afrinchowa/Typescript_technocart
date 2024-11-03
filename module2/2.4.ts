{
  //interface:  generic type

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }
  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Moriom",
    computer: {
      brand: "Asus",
      model: "X-2245t",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Chowa",
    computer: {
      brand: "HP",
      model: "X3434",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "5654gh",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "yamaha",
      engineCapacity: "2000cc",
    },
  };
}
