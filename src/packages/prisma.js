let prisma;

import("@prisma/client/index.js").then(
  (mod) => (prisma = new mod.PrismaClient())
);

// if (import.meta.env.MODE === "development") {
//   import("@prisma/client/index.js").then(
//     (mod) => (prisma = new mod.PrismaClient())
//   );
// } else {
//   import("@prisma/client/edge.js").then(
//     (mod) =>
//       (prisma = new mod.PrismaClient({
//         datasources: {
//           db: {
//             url: import.meta.env.DATABASE_URL,
//           },
//         },
//       }))
//   );
// }

export { prisma };
