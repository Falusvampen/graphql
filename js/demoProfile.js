function logout() {
  localStorage.removeItem("jwt");
  window.location.href = "/index.html";
}

const hardcodedData = {
  data: {
    user: [
      {
        login: "Falusvampen",
        attrs: {
          name: "",
          email: "axelwall@gmail.com",
          image: "https://01.gritlab.ax/git/user/avatar/Falusvampen/-1",
          gender: "Male",
          country: "Sweden",
          lastName: "Wallström",
          firstName: "Axel",
          dateOfBirth: "1999-11-09T00:00:00.000Z",
          nationality: "Sweden",
          phonenumber: "Its a secret",
          yearOfBirth: "1999",
          emergencyTel: "Its a secret",
          photoUploadId:
            "4_z9bc6ab081551d34678ed0014_f1154343c0369c3ca_d20220217_m223603_c003_v0312006_t0005",
          needsAccomodation: "yes",
          regulationAccepted: true,
          "general-conditionsAccepted": true,
        },
        campus: "gritlab",
        level: [
          {
            amount: 43,
          },
        ],
        upAmount: {
          aggregate: {
            sum: {
              amount: 5469350,
            },
          },
        },
        downAmount: {
          aggregate: {
            sum: {
              amount: 5285156.25,
            },
          },
        },
        xpAmount: {
          aggregate: {
            sum: {
              amount: 3000700,
            },
          },
        },
        timeline: [
          {
            amount: 136500,
            createdAt: "2023-12-07T09:28:25.945727+00:00",
            path: "/gritlab/school-curriculum/buy-01",
          },
          {
            amount: 34375,
            createdAt: "2023-04-04T10:56:14.168751+00:00",
            path: "/gritlab/school-curriculum/lem-in",
          },
          {
            amount: 76250,
            createdAt: "2023-06-02T19:21:18.629843+00:00",
            path: "/gritlab/school-curriculum/forum",
          },
          {
            amount: 147000,
            createdAt: "2023-06-03T16:52:44.216011+00:00",
            path: "/gritlab/school-curriculum/make-your-game",
          },
          {
            amount: 51750,
            createdAt: "2023-06-08T13:21:27.218305+00:00",
            path: "/gritlab/school-curriculum/typing-in-progress",
          },
          {
            amount: 100000,
            createdAt: "2023-06-12T08:33:40.798637+00:00",
            path: "/gritlab/school-curriculum/graphql",
          },
          {
            amount: 103500,
            createdAt: "2023-06-07T10:46:37.837898+00:00",
            path: "/gritlab/school-curriculum/real-time-forum",
          },
          {
            amount: 480000,
            createdAt: "2023-07-22T10:18:43.159832+00:00",
            path: "/gritlab/school-curriculum/social-network",
          },
          {
            amount: 2150,
            createdAt: "2023-09-04T00:21:25.590013+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-07-rust/box-it",
          },
          {
            amount: 2150,
            createdAt: "2023-09-04T00:21:32.199547+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-07-rust/borrow-box",
          },
          {
            amount: 2150,
            createdAt: "2023-09-04T00:21:37.87963+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-07-rust/box-recursion",
          },
          {
            amount: 2150,
            createdAt: "2023-09-04T00:21:44.839568+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-07-rust/how-many-references",
          },
          {
            amount: 2300,
            createdAt: "2023-09-04T00:21:58.132891+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-07-rust/drop-the-thread",
          },
          {
            amount: 2150,
            createdAt: "2023-09-04T00:21:51.964687+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-07-rust/ref-cell",
          },
          {
            amount: 145000,
            createdAt: "2023-07-24T13:00:44.168601+00:00",
            path: "/gritlab/school-curriculum/mini-framework",
          },
          {
            amount: 12250,
            createdAt: "2023-08-04T10:54:25.078721+00:00",
            path: "/gritlab/school-curriculum/search-bar",
          },
          {
            amount: 319000,
            createdAt: "2023-08-14T08:59:25.52535+00:00",
            path: "/gritlab/school-curriculum/bomberman-dom",
          },
          {
            amount: 2750,
            createdAt: "2023-09-10T22:03:54.426477+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-09-rust/matrix",
          },
          {
            amount: 2750,
            createdAt: "2023-09-10T22:03:59.941173+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-09-rust/matrix-ops",
          },
          {
            amount: 49000,
            createdAt: "2023-08-17T09:15:10.949659+00:00",
            path: "/gritlab/school-curriculum/different-maps",
          },
          {
            amount: 19100,
            createdAt: "2023-08-17T09:59:14.232623+00:00",
            path: "/gritlab/school-curriculum/image-upload",
          },
          {
            amount: 19100,
            createdAt: "2023-08-15T10:22:49.20634+00:00",
            path: "/gritlab/school-curriculum/security",
          },
          {
            amount: 49000,
            createdAt: "2023-08-17T10:17:12.67742+00:00",
            path: "/gritlab/school-curriculum/history",
          },
          {
            amount: 49000,
            createdAt: "2023-08-17T10:44:58.575947+00:00",
            path: "/gritlab/school-curriculum/score-handling",
          },
          {
            amount: 800,
            createdAt: "2023-08-27T21:23:28.144277+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop2/adventure-character",
          },
          {
            amount: 950,
            createdAt: "2023-08-27T21:24:27.974189+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop2/adventure-templar",
          },
          {
            amount: 1100,
            createdAt: "2023-08-27T21:24:48.921303+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop2/adventure-weapon",
          },
          {
            amount: 1550,
            createdAt: "2023-08-27T21:26:15.022204+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-04-rust/profanity-filter",
          },
          {
            amount: 1550,
            createdAt: "2023-08-27T21:26:20.428916+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-04-rust/question-mark",
          },
          {
            amount: 800,
            createdAt: "2023-08-27T21:23:37.80031+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop2/adventure-utils",
          },
          {
            amount: 950,
            createdAt: "2023-08-27T21:24:05.939223+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop2/adventure-interface",
          },
          {
            amount: 950,
            createdAt: "2023-08-27T21:24:17.540786+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop2/adventure-sorcerer",
          },
          {
            amount: 1550,
            createdAt: "2023-08-27T21:26:31.333996+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-04-rust/cipher",
          },
          {
            amount: 1700,
            createdAt: "2023-08-27T21:26:45.73367+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-04-rust/error-types",
          },
          {
            amount: 950,
            createdAt: "2023-08-27T21:23:55.547912+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop2/adventure-monster",
          },
          {
            amount: 1100,
            createdAt: "2023-08-27T21:24:38.910448+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop2/adventure-abstract",
          },
          {
            amount: 1100,
            createdAt: "2023-08-27T21:24:58.721128+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop2/adventure-exception",
          },
          {
            amount: 1100,
            createdAt: "2023-08-27T21:25:11.531631+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop2/adventure-catch",
          },
          {
            amount: 1400,
            createdAt: "2023-08-27T21:25:52.381767+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-04-rust/unwrap-or-expect",
          },
          {
            amount: 1550,
            createdAt: "2023-08-27T21:25:59.573936+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-04-rust/panic",
          },
          {
            amount: 1550,
            createdAt: "2023-08-27T21:26:09.438675+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-04-rust/handling",
          },
          {
            amount: 1550,
            createdAt: "2023-08-27T21:26:26.16936+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-04-rust/banner",
          },
          {
            amount: 1700,
            createdAt: "2023-08-27T21:26:52.998194+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-04-rust/boxing-todo",
          },
          {
            amount: 18375,
            createdAt: "2023-08-17T18:35:56.669468+00:00",
            path: "/gritlab/school-curriculum/push-swap",
          },
          {
            amount: 12250,
            createdAt: "2023-08-17T21:51:09.038263+00:00",
            path: "/gritlab/school-curriculum/my-ls-1",
          },
          {
            amount: 5000,
            createdAt: "2023-08-19T12:17:11.404073+00:00",
            path: "/gritlab/school-curriculum/tetris-optimizer",
          },
          {
            amount: 5000,
            createdAt: "2022-09-07T16:50:46.447947+00:00",
            path: "/gritlab/school-curriculum/go-reloaded",
          },
          {
            amount: 500,
            createdAt: "2023-08-21T02:36:57.255967+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-01-rust/scalar",
          },
          {
            amount: 650,
            createdAt: "2023-08-21T02:37:03.055605+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-01-rust/temperature-conv",
          },
          {
            amount: 950,
            createdAt: "2023-09-05T10:45:17.638745+00:00",
            path: "/gritlab/school-curriculum/piscine-java/standard-lib/parse-date",
          },
          {
            amount: 950,
            createdAt: "2023-09-05T10:45:26.472971+00:00",
            path: "/gritlab/school-curriculum/piscine-java/standard-lib/format-date",
          },
          {
            amount: 950,
            createdAt: "2023-09-05T10:45:35.452238+00:00",
            path: "/gritlab/school-curriculum/piscine-java/standard-lib/regex-match",
          },
          {
            amount: 650,
            createdAt: "2023-08-21T02:37:08.697355+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-01-rust/speed-transformation",
          },
          {
            amount: 800,
            createdAt: "2023-08-21T02:37:15.521483+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-01-rust/looping",
          },
          {
            amount: 800,
            createdAt: "2023-08-21T02:37:21.315812+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-01-rust/groceries",
          },
          {
            amount: 800,
            createdAt: "2023-08-21T02:37:26.177579+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-01-rust/reverse-string",
          },
          {
            amount: 1100,
            createdAt: "2023-08-21T02:38:20.722106+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-01-rust/tuples-refs",
          },
          {
            amount: 950,
            createdAt: "2023-08-21T02:37:41.230361+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-01-rust/find-factorial",
          },
          {
            amount: 950,
            createdAt: "2023-08-21T02:38:05.921711+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-01-rust/matrix-transposition",
          },
          {
            amount: 950,
            createdAt: "2023-08-21T02:38:15.266831+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-01-rust/division-and-remainder",
          },
          {
            amount: 950,
            createdAt: "2023-08-21T02:37:59.018917+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-01-rust/fibonacci2",
          },
          {
            amount: 2900,
            createdAt: "2023-09-11T22:03:50.089625+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-09-rust/matrix-mult",
          },
          {
            amount: 2900,
            createdAt: "2023-09-11T22:04:00.751939+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-09-rust/delete-prefix",
          },
          {
            amount: 2900,
            createdAt: "2023-09-11T22:05:47.876319+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-09-rust/border-cross",
          },
          {
            amount: 2900,
            createdAt: "2023-09-11T22:03:55.777041+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-09-rust/lifetimes",
          },
          {
            amount: 2900,
            createdAt: "2023-09-11T22:05:59.308624+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-09-rust/events",
          },
          {
            amount: 500,
            createdAt: "2023-08-21T08:03:16.089521+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-intro/hello-world",
          },
          {
            amount: 1100,
            createdAt: "2023-09-05T16:19:15.78655+00:00",
            path: "/gritlab/school-curriculum/piscine-java/standard-lib/regex-replace",
          },
          {
            amount: 1100,
            createdAt: "2023-09-05T16:19:46.885498+00:00",
            path: "/gritlab/school-curriculum/piscine-java/standard-lib/difference-between-date",
          },
          {
            amount: 650,
            createdAt: "2023-08-21T08:26:56.106668+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-intro/int-operations",
          },
          {
            amount: 650,
            createdAt: "2023-08-21T08:31:18.525253+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-intro/float-operations",
          },
          {
            amount: 800,
            createdAt: "2023-08-21T08:33:39.868259+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-intro/is-even",
          },
          {
            amount: 800,
            createdAt: "2023-08-21T08:46:09.280022+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-intro/chifoumi",
          },
          {
            amount: 2150,
            createdAt: "2023-09-05T23:40:30.494833+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-08-rust/generics",
          },
          {
            amount: 2150,
            createdAt: "2023-09-05T23:40:42.508449+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-08-rust/easy-traits",
          },
          {
            amount: 2150,
            createdAt: "2023-09-05T23:40:48.765425+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-08-rust/traits",
          },
          {
            amount: 2300,
            createdAt: "2023-09-05T23:40:54.215574+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-08-rust/blood-types",
          },
          {
            amount: 2300,
            createdAt: "2023-09-05T23:41:15.715966+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-08-rust/lalgebra-vector",
          },
          {
            amount: 2150,
            createdAt: "2023-09-05T23:40:37.285984+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-08-rust/generics-list",
          },
          {
            amount: 2300,
            createdAt: "2023-09-05T23:41:09.875193+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-08-rust/lalgebra-scalar",
          },
          {
            amount: 950,
            createdAt: "2023-09-05T23:42:14.234887+00:00",
            path: "/gritlab/school-curriculum/piscine-java/design-patterns/factory",
          },
          {
            amount: 2300,
            createdAt: "2023-09-05T23:40:59.201262+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-08-rust/vector-operations",
          },
          {
            amount: 2300,
            createdAt: "2023-09-05T23:41:05.064513+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-08-rust/roman-numbers",
          },
          {
            amount: 2300,
            createdAt: "2023-09-05T23:41:26.918341+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-08-rust/commits-stats",
          },
          {
            amount: 1100,
            createdAt: "2023-09-05T23:42:25.045295+00:00",
            path: "/gritlab/school-curriculum/piscine-java/design-patterns/builder",
          },
          {
            amount: 1100,
            createdAt: "2023-09-05T23:42:34.422489+00:00",
            path: "/gritlab/school-curriculum/piscine-java/design-patterns/decorator",
          },
          {
            amount: 950,
            createdAt: "2023-09-05T23:42:03.893082+00:00",
            path: "/gritlab/school-curriculum/piscine-java/design-patterns/singleton",
          },
          {
            amount: 100,
            createdAt: "2022-09-22T10:01:58.595203+00:00",
            path: "/gritlab/school-curriculum/checkpoint/displayalrevm",
          },
          {
            amount: 200,
            createdAt: "2022-09-22T10:03:33.668528+00:00",
            path: "/gritlab/school-curriculum/checkpoint/countdown",
          },
          {
            amount: 800,
            createdAt: "2023-08-21T09:35:17.960998+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-intro/string-length",
          },
          {
            amount: 950,
            createdAt: "2023-08-21T09:43:00.37946+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-intro/string-concat",
          },
          {
            amount: 950,
            createdAt: "2023-08-21T10:17:07.607537+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-intro/string-contains",
          },
          {
            amount: 950,
            createdAt: "2023-08-21T10:26:19.865731+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-intro/string-replace",
          },
          {
            amount: 6125,
            createdAt: "2022-09-29T16:26:55.142587+00:00",
            path: "/gritlab/school-curriculum/ascii-art",
          },
          {
            amount: 6125,
            createdAt: "2022-10-03T10:44:43.388201+00:00",
            path: "/gritlab/school-curriculum/output",
          },
          {
            amount: 6125,
            createdAt: "2022-10-03T11:24:23.928278+00:00",
            path: "/gritlab/school-curriculum/fs",
          },
          {
            amount: 950,
            createdAt: "2023-08-21T11:29:39.867544+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-intro/clean-extract",
          },
          {
            amount: 1100,
            createdAt: "2023-08-21T11:51:59.929825+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-intro/is-palindrome",
          },
          {
            amount: 1100,
            createdAt: "2023-08-21T11:58:00.081083+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-intro/compute-array",
          },
          {
            amount: 2750,
            createdAt: "2023-09-13T12:52:00.70838+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-10-rust/closures",
          },
          {
            amount: 2900,
            createdAt: "2023-09-13T12:52:06.468986+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-10-rust/sales",
          },
          {
            amount: 1550,
            createdAt: "2023-08-29T08:37:27.986428+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-05-rust/middle-day",
          },
          {
            amount: 2900,
            createdAt: "2023-09-13T12:52:18.394217+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-10-rust/adding",
          },
          {
            amount: 2900,
            createdAt: "2023-09-13T12:52:53.78609+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-10-rust/slices-to-map",
          },
          {
            amount: 1550,
            createdAt: "2023-08-29T08:37:38.73345+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-05-rust/does-it-fit",
          },
          {
            amount: 1550,
            createdAt: "2023-08-29T08:37:45.410631+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-05-rust/macro-calculator",
          },
          {
            amount: 2900,
            createdAt: "2023-09-13T12:52:23.940118+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-10-rust/adding-twice",
          },
          {
            amount: 2900,
            createdAt: "2023-09-13T12:52:40.268635+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-10-rust/iterators",
          },
          {
            amount: 2900,
            createdAt: "2023-09-13T12:53:00.735937+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-10-rust/step-iterator",
          },
          {
            amount: 2900,
            createdAt: "2023-09-13T12:53:06.979108+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-10-rust/project-motion",
          },
          {
            amount: 1550,
            createdAt: "2023-08-29T08:37:56.004654+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-05-rust/shopping-mall",
          },
          {
            amount: 2900,
            createdAt: "2023-09-13T12:52:29.030295+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-10-rust/get-products",
          },
          {
            amount: 2900,
            createdAt: "2023-09-13T12:52:35.182168+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-10-rust/highest",
          },
          {
            amount: 2900,
            createdAt: "2023-09-13T12:52:45.508306+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-10-rust/roman-numbers-iter",
          },
          {
            amount: 650,
            createdAt: "2023-08-21T21:25:28.112949+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-02-rust/borrow",
          },
          {
            amount: 950,
            createdAt: "2023-08-21T21:26:05.718609+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-02-rust/ownership",
          },
          {
            amount: 950,
            createdAt: "2023-08-21T21:26:13.258886+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-02-rust/copy",
          },
          {
            amount: 650,
            createdAt: "2023-08-21T21:25:33.821469+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-02-rust/doubtful",
          },
          {
            amount: 800,
            createdAt: "2023-08-21T21:25:50.512993+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-02-rust/string-literals",
          },
          {
            amount: 950,
            createdAt: "2023-08-21T21:26:20.375817+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-02-rust/borrow-me-the-reference",
          },
          {
            amount: 950,
            createdAt: "2023-08-21T21:26:26.460154+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-02-rust/tic-tac-toe",
          },
          {
            amount: 1100,
            createdAt: "2023-08-21T21:26:32.811649+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-02-rust/arrange-it",
          },
          {
            amount: 650,
            createdAt: "2023-08-21T21:27:00.121306+00:00",
            path: "/gritlab/school-curriculum/piscine-java/io-args/do-op",
          },
          {
            amount: 800,
            createdAt: "2023-08-21T21:27:41.285196+00:00",
            path: "/gritlab/school-curriculum/piscine-java/io-args/cat-in-file",
          },
          {
            amount: 800,
            createdAt: "2023-08-21T21:27:50.327448+00:00",
            path: "/gritlab/school-curriculum/piscine-java/io-args/capitalize",
          },
          {
            amount: 800,
            createdAt: "2023-08-21T21:25:39.269902+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-02-rust/to-url",
          },
          {
            amount: 800,
            createdAt: "2023-08-21T21:25:56.274078+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-02-rust/name-initials",
          },
          {
            amount: 650,
            createdAt: "2023-08-21T21:27:09.722399+00:00",
            path: "/gritlab/school-curriculum/piscine-java/io-args/sort-args",
          },
          {
            amount: 800,
            createdAt: "2023-08-21T21:27:23.808148+00:00",
            path: "/gritlab/school-curriculum/piscine-java/io-args/cat",
          },
          {
            amount: 1550,
            createdAt: "2023-08-29T14:24:56.59738+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-05-rust/expected-variable",
          },
          {
            amount: 1550,
            createdAt: "2023-08-29T15:04:51.335504+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-05-rust/mobs",
          },
          {
            amount: 1100,
            createdAt: "2023-09-07T10:39:52.749253+00:00",
            path: "/gritlab/school-curriculum/piscine-java/design-patterns/strategy",
          },
          {
            amount: 1100,
            createdAt: "2023-09-07T10:58:57.689766+00:00",
            path: "/gritlab/school-curriculum/piscine-java/design-patterns/observer",
          },
          {
            amount: 390000,
            createdAt: "2023-09-16T04:51:55.003654+00:00",
            path: "/gritlab/school-curriculum/piscine-rust",
          },
          {
            amount: 105000,
            createdAt: "2023-09-28T22:35:33.272263+00:00",
            path: "/gritlab/school-curriculum/angul-it",
          },
          {
            amount: 97500,
            createdAt: "2023-09-27T18:48:18.820807+00:00",
            path: "/gritlab/school-curriculum/lets-play",
          },
          {
            amount: 950,
            createdAt: "2023-08-22T12:53:24.0067+00:00",
            path: "/gritlab/school-curriculum/piscine-java/io-args/file-manager",
          },
          {
            amount: 950,
            createdAt: "2023-08-22T12:53:33.987626+00:00",
            path: "/gritlab/school-curriculum/piscine-java/io-args/file-search",
          },
          {
            amount: 1550,
            createdAt: "2023-08-30T11:05:15.762097+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-06-rust/stars",
          },
          {
            amount: 1550,
            createdAt: "2023-08-30T11:05:25.761711+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-06-rust/searching",
          },
          {
            amount: 1700,
            createdAt: "2023-08-30T11:05:41.683662+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-06-rust/talking",
          },
          {
            amount: 1700,
            createdAt: "2023-08-30T11:05:57.360515+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-06-rust/rot",
          },
          {
            amount: 1550,
            createdAt: "2023-08-30T11:05:30.440648+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-06-rust/ordinal",
          },
          {
            amount: 1700,
            createdAt: "2023-08-30T11:06:07.235521+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-06-rust/pig-latin",
          },
          {
            amount: 1550,
            createdAt: "2023-08-30T11:05:21.173978+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-06-rust/scores",
          },
          {
            amount: 1550,
            createdAt: "2023-08-30T11:05:36.109272+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-06-rust/pangram",
          },
          {
            amount: 1700,
            createdAt: "2023-08-30T11:05:46.408277+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-06-rust/logic-number",
          },
          {
            amount: 1700,
            createdAt: "2023-08-30T11:06:02.46876+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-06-rust/rgb-match",
          },
          {
            amount: 75250,
            createdAt: "2023-10-18T09:05:02.069354+00:00",
            path: "/gritlab/school-curriculum/smart-road",
          },
          {
            amount: 105000,
            createdAt: "2023-10-30T15:09:55.731194+00:00",
            path: "/gritlab/school-curriculum/filler",
          },
          {
            amount: 1700,
            createdAt: "2023-08-30T19:51:37.886783+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-06-rust/diamond-creation",
          },
          {
            amount: 1700,
            createdAt: "2023-08-30T19:51:31.305448+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-06-rust/scytale-cipher",
          },
          {
            amount: 1850,
            createdAt: "2023-08-30T19:51:46.844846+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-06-rust/spelling",
          },
          {
            amount: 800,
            createdAt: "2023-08-22T21:05:50.17043+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-03-rust/circle",
          },
          {
            amount: 800,
            createdAt: "2023-08-22T21:06:20.493707+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-03-rust/arrays",
          },
          {
            amount: 950,
            createdAt: "2023-08-22T21:06:43.763744+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-03-rust/simple-hash",
          },
          {
            amount: 1100,
            createdAt: "2023-08-22T21:07:04.987834+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-03-rust/string-permutation",
          },
          {
            amount: 1100,
            createdAt: "2023-08-22T21:07:14.215516+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-03-rust/hashing",
          },
          {
            amount: 1100,
            createdAt: "2023-08-22T21:09:55.342747+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop1/star-mass",
          },
          {
            amount: 650,
            createdAt: "2023-08-22T21:05:44.191693+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-03-rust/changes",
          },
          {
            amount: 800,
            createdAt: "2023-08-22T21:05:58.446126+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-03-rust/card-deck",
          },
          {
            amount: 950,
            createdAt: "2023-08-22T21:06:37.408788+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-03-rust/edit-distance",
          },
          {
            amount: 1100,
            createdAt: "2023-08-22T21:06:55.860122+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-03-rust/bigger",
          },
          {
            amount: 800,
            createdAt: "2023-08-22T21:08:31.542048+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop1/star-getters",
          },
          {
            amount: 950,
            createdAt: "2023-08-22T21:09:04.539222+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop1/star-inheritance",
          },
          {
            amount: 950,
            createdAt: "2023-08-22T21:06:26.100879+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-03-rust/strings",
          },
          {
            amount: 950,
            createdAt: "2023-08-22T21:06:32.054763+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-03-rust/capitalizing",
          },
          {
            amount: 1100,
            createdAt: "2023-08-22T21:07:20.126367+00:00",
            path: "/gritlab/school-curriculum/piscine-rust/quest-03-rust/collect",
          },
          {
            amount: 650,
            createdAt: "2023-08-22T21:08:11.095795+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop1/star-properties",
          },
          {
            amount: 950,
            createdAt: "2023-08-22T21:08:53.139351+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop1/star-utils",
          },
          {
            amount: 800,
            createdAt: "2023-08-22T21:08:21.717152+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop1/star-constructors",
          },
          {
            amount: 800,
            createdAt: "2023-08-22T21:08:41.267083+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop1/star-static",
          },
          {
            amount: 950,
            createdAt: "2023-08-22T21:09:16.919+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop1/star-override",
          },
          {
            amount: 950,
            createdAt: "2023-08-22T21:09:29.54495+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop1/star-planet",
          },
          {
            amount: 1100,
            createdAt: "2023-08-22T21:09:40.49715+00:00",
            path: "/gritlab/school-curriculum/piscine-java/oop1/star-galaxy",
          },
          {
            amount: 950,
            createdAt: "2023-08-31T11:45:18.795324+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-structures/list-search-index",
          },
          {
            amount: 1100,
            createdAt: "2023-08-31T11:46:17.10265+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-structures/set-equal",
          },
          {
            amount: 1100,
            createdAt: "2023-08-31T11:46:38.311572+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-structures/stream-collect",
          },
          {
            amount: 1100,
            createdAt: "2023-08-31T11:45:49.730696+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-structures/map-equals",
          },
          {
            amount: 1100,
            createdAt: "2023-08-31T11:46:03.949351+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-structures/set-operations",
          },
          {
            amount: 1250,
            createdAt: "2023-08-31T11:46:57.516351+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-structures/stream-reduce",
          },
          {
            amount: 800,
            createdAt: "2023-08-31T11:44:55.878824+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-structures/list-contains",
          },
          {
            amount: 950,
            createdAt: "2023-08-31T11:45:07.743274+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-structures/list-equals",
          },
          {
            amount: 950,
            createdAt: "2023-08-31T11:45:30.103898+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-structures/sort-list",
          },
          {
            amount: 950,
            createdAt: "2023-08-31T11:45:40.538683+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-structures/map-inventory",
          },
          {
            amount: 1250,
            createdAt: "2023-08-31T11:46:48.488613+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-structures/stream-map",
          },
          {
            amount: 1250,
            createdAt: "2023-08-31T11:49:02.768937+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-structures/keep-the-change",
          },
          {
            amount: 1250,
            createdAt: "2023-08-31T11:58:22.834932+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-structures/wedding",
          },
          {
            amount: 1250,
            createdAt: "2023-08-31T12:27:53.358592+00:00",
            path: "/gritlab/school-curriculum/piscine-java/java-structures/wedding-complex",
          },
          {
            amount: 70000,
            createdAt: "2023-01-30T08:32:17.268497+00:00",
            path: "/gritlab/school-curriculum/piscine-js",
          },
          {
            amount: 9200,
            createdAt: "2022-11-16T16:10:52.168946+00:00",
            path: "/gritlab/school-curriculum/ascii-art-web",
          },
          {
            amount: 6125,
            createdAt: "2022-10-17T17:39:25.724325+00:00",
            path: "/gritlab/school-curriculum/color",
          },
          {
            amount: 9200,
            createdAt: "2022-11-16T16:53:36.429254+00:00",
            path: "/gritlab/school-curriculum/stylize",
          },
          {
            amount: 9200,
            createdAt: "2022-11-25T13:27:32.573082+00:00",
            path: "/gritlab/school-curriculum/dockerize",
          },
          {
            amount: 24500,
            createdAt: "2022-12-09T12:38:34.268016+00:00",
            path: "/gritlab/school-curriculum/groupie-tracker",
          },
          {
            amount: 12250,
            createdAt: "2022-12-16T15:15:51.631782+00:00",
            path: "/gritlab/school-curriculum/visualizations",
          },
          {
            amount: 12250,
            createdAt: "2022-12-20T19:41:58.392034+00:00",
            path: "/gritlab/school-curriculum/net-cat",
          },
          {
            amount: 100,
            createdAt: "2022-09-08T10:03:41.537351+00:00",
            path: "/gritlab/school-curriculum/checkpoint/printdigits",
          },
          {
            amount: 200,
            createdAt: "2022-09-08T10:09:39.286782+00:00",
            path: "/gritlab/school-curriculum/checkpoint/max",
          },
          {
            amount: 300,
            createdAt: "2022-09-08T11:13:01.231732+00:00",
            path: "/gritlab/school-curriculum/checkpoint/rot13",
          },
          {
            amount: 400,
            createdAt: "2022-09-08T11:27:23.075198+00:00",
            path: "/gritlab/school-curriculum/checkpoint/alphamirror",
          },
          {
            amount: 300,
            createdAt: "2022-09-22T10:09:40.540012+00:00",
            path: "/gritlab/school-curriculum/checkpoint/rot13",
          },
          {
            amount: 400,
            createdAt: "2022-09-22T10:11:22.135932+00:00",
            path: "/gritlab/school-curriculum/checkpoint/compare",
          },
          {
            amount: 500,
            createdAt: "2022-09-22T11:58:16.813304+00:00",
            path: "/gritlab/school-curriculum/checkpoint/reversebits",
          },
          {
            amount: 600,
            createdAt: "2022-09-22T12:13:35.874935+00:00",
            path: "/gritlab/school-curriculum/checkpoint/printhex",
          },
        ],
      },
    ],
  },
};

function processData() {
  try {
    const user = hardcodedData.data.user[0];
    console.log(user);
    displayUserInfo(user);
    displayUserXp(
      user.xpAmount.aggregate.sum.amount,
      user.upAmount.aggregate.sum.amount,
      user.downAmount.aggregate.sum.amount
    );

    // get the size of the timeline-container
    const timelineContainer = document.getElementById("timeline-container");

    // create the timeline
    createTimeline(
      timelineContainer.offsetWidth,
      timelineContainer.offsetHeight,
      hardcodedData
    );
    //  if the window is resized, re-create the timeline
    const firstHeight = timelineContainer.offsetHeight;
    window.addEventListener("resize", () => {
      createTimeline(timelineContainer.offsetWidth, firstHeight, hardcodedData);
    });
  } catch (error) {
    console.error("Error processing data:", error);
  }
}

// Call processData on page load
processData();

function createTimeline(thicc, smoll, data) {
  // remove the previous timeline
  d3.select("#timeline").selectAll("*").remove();
  d3.select(".tooltip").remove();

  // sort the timeline data by date
  data.data.user[0].timeline.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );
  // get the start and end date of the timeline
  const startDate = new Date(data.data.user[0].timeline[0].createdAt);
  const endDate = new Date(
    data.data.user[0].timeline[data.data.user[0].timeline.length - 1].createdAt
  );

  // set the start and end date to the first and last day of the month in order to get the correct width of the timeline
  startDate.setDate(1);
  startDate.setHours(0, 0, 0, 0);
  endDate.setDate(1);
  endDate.setMonth(endDate.getMonth() + 1);
  endDate.setHours(0, 0, 0, 0);

  // set the margins and width and height of the timeline
  const margin = { top: 10, right: 40, bottom: 30, left: 40 },
    width = thicc - margin.left - margin.right - 100,
    height = smoll - margin.top - margin.bottom - 40;

  // create a new svg element with the width and height of the timeline-container
  const svg = d3
    .select("#timeline")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleTime().domain([startDate, endDate]).range([0, width]);
  if (thicc < 800 && thicc > 600) {
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(d3.timeMonth.every(1))
          .tickFormat(d3.timeFormat("%b %Y"))
      );
  } else if (thicc < 600 && thicc >= 500) {
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(d3.timeMonth.every(1))
          .tickFormat(d3.timeFormat("%b %y"))
      );
  } else if (thicc < 500 && thicc > 0) {
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(d3.timeMonth.every(1))
          .tickFormat(d3.timeFormat("%b"))
      );
  } else {
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(d3.timeMonth.every(1))
          .tickFormat(d3.timeFormat("%B %Y"))
      );
  }

  const tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0)
    .style("left", "50%") // Set initial left position
    .style("top", "0"); // Set initial top position

  const mergeOverlappingDots = (data) => {
    let mergedData = [];
    let tempData = [];

    data.forEach((item, i) => {
      if (i === 0) {
        tempData.push(item);
      } else if (
        Math.abs(
          x(new Date(data[i - 1].createdAt)) - x(new Date(item.createdAt))
        ) < 6
      ) {
        tempData.push(item);
      } else {
        mergedData.push(tempData);
        tempData = [item];
      }
    });

    mergedData.push(tempData);
    return mergedData;
  };

  const mergedData = mergeOverlappingDots(data.data.user[0].timeline);

  const colorScale = d3
    .scaleLinear()
    .domain([0, d3.max(data.data.user[0].timeline, (d) => d.amount)])
    .range(["#3366cc", "#cc3366"]);

  svg
    .selectAll(".dot")
    .data(mergedData)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("r", (d) => 5)
    .attr("cx", (d) => x(new Date(d[0].createdAt)))
    .attr("cy", height)
    .attr("fill", (d) => colorScale(d[0].amount)) // Fill dots with color based on amount
    .on("mouseover", function (event, d) {
      tooltip.transition().duration(200).style("opacity", 0.9);

      let tooltipHtml = "";

      // Group projects by date
      let dateGroupedProjects = d.reduce((group, project) => {
        let date = d3.timeFormat("%B %d, %Y")(new Date(project.createdAt));
        if (!group[date]) group[date] = [];
        group[date].push(project);
        return group;
      }, {});

      // Generate tooltip HTML

      for (let date in dateGroupedProjects) {
        tooltipHtml += `${date}<br/>`;
        tooltipHtml += dateGroupedProjects[date]
          .map(
            (project) =>
              `${project.path.split("/").pop()}<br/>${convertToByteUnits(
                project.amount
              )}` // Display project name and XP
          )
          .join("<br/>");
        tooltipHtml += "<br/>";
      }

      tooltip
        .html(tooltipHtml)
        .style("left", event.pageX + "px")
        .style("top", event.pageY - 28 + "px");
    })

    .on("mouseout", function (d) {
      tooltip.transition().duration(500).style("opacity", 0);
    });
}

function displayUserLevel(level) {
  // if the user is between level 0 -10 return a string containing the level followed by "Aspiring Developer"
  if (level >= 0 && level < 10) {
    return `Level ${level} Aspiring Developer`;
  }
  if (level >= 10 && level < 20) {
    return `Level ${level} Beginner Developer`;
  }
  if (level >= 20 && level < 30) {
    return `Level ${level} Apprentice Developer`;
  }
  if (level >= 30 && level < 40) {
    return `Level ${level} Assistant Developer`;
  }
  if (level >= 40 && level < 50) {
    return `Level ${level} Basic Developer`;
  }
  if (level >= 50 && level < 60) {
    return `Level ${level} Junior Developer`;
  } else {
    return `Level ${level}`;
  }
}

// Display the user XP and XP ratio in the DOM and generate the XP graph
function displayUserXp(xpAmount, upAmount, downAmount) {
  // Display the user XP
  document.getElementById(
    "total-xp"
  ).textContent = `Total XP: ${convertToByteUnits(xpAmount)}`;
  // Display the user XP ratio
  document.getElementById("xpRatio").textContent =
    "Audit Ratio: " + (upAmount / downAmount).toFixed(2);
  // Display the user given XP
  document.getElementById("upXpValue").textContent =
    "Up XP: " + convertToByteUnits(upAmount);
  // Display the user received XP
  document.getElementById("downXpValue").textContent =
    "Down XP: " + convertToByteUnits(downAmount);

  const totalXP = upAmount + downAmount;
  const upXp = document.getElementById("upXp");
  const downXp = document.getElementById("downXp");
  const upXpWidth = (upAmount / totalXP) * 100;
  const downXpWidth = (downAmount / totalXP) * 100;
  upXp.setAttribute("width", upXpWidth);
  upXp.setAttribute("x", 0);
  downXp.setAttribute("width", downXpWidth);
  downXp.setAttribute("x", upXpWidth);
}

function displayUserInfo(user) {
  // Set the title of the page to the username of the user
  document.title = `${user.login}s Profile`;
  // Set the user image
  document.querySelector(".user-image").src = user.attrs.image;
  // set the user name
  document.getElementById(
    "name-profile"
  ).textContent = ` ${user.login}s Profile`;
  // Set the user phone number
  document.getElementById("phone").textContent = ` ${user.attrs.phonenumber}`;
  //  set the user email
  document.getElementById("email").textContent = ` ${user.attrs.email}`;
  // set the user first name and last name
  document.getElementById(
    "first-name-last-name"
  ).textContent = ` ${user.attrs.firstName} ${user.attrs.lastName}`;
  // set the user campus
  document.getElementById("campus").textContent = ` ${displayUserLevel(
    user.level[0].amount
  )} at ${user.campus}`;
  // set the user age and country
  document.getElementById("from").textContent = `${calculateAge(
    user.attrs.dateOfBirth
  )} Years old from ${user.attrs.country}`;
}
function generateGraphs(user) {
  // Use the user data to generate the SVG graphs
}

function calculateAge(dateOfBirthStr) {
  const dob = new Date(dateOfBirthStr);
  const diffMs = Date.now() - dob.getTime();
  const ageDate = new Date(diffMs); // milliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970); // subtract 1970 to get the age in years
}

// Call fetchData on page load
// fetchData();

function convertToByteUnits(num) {
  const units = ["bytes", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let i = 0;
  while (num >= 1000 && i < units.length - 1) {
    num /= 1000;
    i++;
  }
  // remove decimals and round up to nearest integer
  num = Math.round(num);
  return `${num} ${units[i]}`;
}
