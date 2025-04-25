/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Card,
  Container,
  Grid,
  Title,
  Text,
  Table,
  Badge,
  Button,
  Group,
  Stack,
  TextInput,
  Modal,
  NumberInput,
  // Pagination
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "@/app/components/side_bar";

interface Drug {
  id: number;
  name: string;
  quantity: number;
  price: number;
  stock: { id: number; expiryDate: string }[];
  purchase: { id: number; buyerName: string }[];
}

function DashboardScreen() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [activePage, setPage] = useState(1);
  const [drugForm, setDrugForm] = useState({
    id: 0,
    name: "",
    quantity: 1,
    price: 0,
    expiryDate: "",
  });
  const [stats, setStats] = useState<{
    totalDrugs: number;
    lowStock: Drug[];
    expiringInOneYear: Drug[];
    purchase: Drug[];
  }>({
    totalDrugs: 0,
    lowStock: [],
    expiringInOneYear: [],
    purchase: [],
  });
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  // const itemPerPage = 5;

  // const paginatedDrugs = stats.lowStock.slice(
  //   (activePage - 1) * itemPerPage,
  //   activePage * itemPerPage
  // )

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<{
          totalDrugs: number;
          lowStock: Drug[];
          expiringInOneYear: Drug[];
          purchase: [];
        }>("http://localhost:3000/api/v1/dashboard/all");
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    }
    fetchData();
  }, []);

  const handleProductView = (id: number) => {
    router.push(`/pages/dashboard/${id}`);
  };

  useEffect(() => {
    const handleSearch = async () => {
      if (!query) {
        setResults([]);
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/dashboard/search?query=${query}`
        );
        setResults(response.data);
      } catch (error) {
        console.error("Error Searching Products:", error);
      }
    };
    handleSearch();
  }, [query]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);

      const createDrug = await axios.post(
        "http://localhost:3000/api/v1/product/add",
        drugForm
      );
      if (createDrug) {
        setLoading(false);
        toast.success(`${drugForm.name} is created`);
        <Group justify="flex-end" gap="xs">
          <Text>Search : </Text>
          <form action="">
            <TextInput
              name="search"
              placeholder="Search Drugs"
              // value={invoice.buyerName}
              // onChange={handleChange}
              // required
            />
          </form>
        </Group>;
      } else {
        setLoading(false);
        toast.error("Error in creating products");
      }
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred");
      console.log(error);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setDrugForm((prev) => ({
      ...prev,
      [field]: field === "expiryDate" && value ? value.toISOString() : value,
    }));
  };
  return (
    <Container
      fluid
      style={{
        width: "100%",
        maxWidth: "100%",
        marginTop: "50",
        backdropFilter: opened ? "blur(100px)" : "none",
        transition: "0.3s ease",
        backgroundColor: "#f1f3f5",
      }}
    >
      <Group justify="start" align="flex-start">
        <SideBar />
        <Stack align="stretch" justify="flex-start" gap={"xs"} m={"lg"}>
          <Group grow>
            <Link href={""}>
              <GiHamburgerMenu />
            </Link>

            <Link href="/">Home</Link>
            <Link href="/">Account</Link>
            <TextInput
              name="search"
              placeholder="Search Drugs"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              // required
            />
            <Link href="/">
              <GiHamburgerMenu />
            </Link>
            <Link href="/">Home</Link>
            <p>Arrows Icon</p>
            <p>Account Icon</p>
            <p>ECHIHQTRs</p>
          </Group>
          <Title order={2} mb="mb" mt={5}>
            DASHBOARD
          </Title>

          <Grid>
            <Grid.Col span={4}>
              <Card
                shadow="sm"
                padding="lg"
                style={{ backgroundColor: "yellow", color: "black" }}
              >
                <Text size="lg" fw={700}>
                  Total Drugs
                </Text>
                <Text size="xl">{stats.totalDrugs}</Text>
              </Card>
            </Grid.Col>

            <Grid.Col span={4}>
              <Card
                shadow="sm"
                padding={"lg"}
                style={{ backgroundColor: "green", color: "white" }}
              >
                <Text size="lg" fw={700}>
                  Low Stock
                </Text>
                <Text size="xl">{stats.lowStock.length}</Text>
              </Card>
            </Grid.Col>

            <Grid.Col span={4}>
              <Card
                shadow="sm"
                padding={"lg"}
                style={{ backgroundColor: "red", color: "black" }}
              >
                <Text size="lg" fw={700}>
                  Expiring Soon
                </Text>
                <Text size="xl">{stats.expiringInOneYear.length}</Text>
              </Card>
            </Grid.Col>
          </Grid>

          <Title order={3} mt={"lg"}>
            DRUGS IN THE STORE
          </Title>
          <Stack
            h={100}
            bg="var(--mantine-color-body)"
            align="flex-end"
            justify="flex-start"
            gap="sm"
          >
            <Button
              style={{ backgroundColor: "blue", color: "white" }}
              onClick={() => setOpened(true)}
            >
              <span>➕ Add Drug</span>
            </Button>
            <Group justify="flex-center" gap="xs">
              <Text>Search : </Text>

              <TextInput
                name="search"
                placeholder="Search Drugs"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                // required
              />
            </Group>
          </Stack>

          <Table.ScrollContainer minWidth={500}>
            <Table
              highlightOnHover
              striped
              horizontalSpacing="xl"
              verticalSpacing="md"
              // stickyHeaderOffset={10}
              withTableBorder
              withColumnBorders
              withRowBorders
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th style={{ textAlign: "left", width: "25%" }}>
                    Drug Name
                  </Table.Th>
                  <Table.Th style={{ textAlign: "center", width: "10%" }}>
                    Quantity
                  </Table.Th>
                  <Table.Th style={{ textAlign: "center", width: "15%" }}>
                    Price (₦)
                  </Table.Th>
                  {/* <th style={{ textAlign: "left", width: "40%" }}>Suppliers</th> */}
                  <Table.Th style={{ textAlign: "left", width: "25%" }}>
                    Expiry Date
                  </Table.Th>
                  <Table.Th style={{ textAlign: "center", width: "10%" }}>
                    Actions
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>

              <Table.Tbody>
                {(results.length > 0 ? results : stats.lowStock).map(
                  (drug, index) => (
                    <Table.Tr key={index}>
                      <Table.Td style={{ textAlign: "left" }}>
                        {drug.name}
                      </Table.Td>
                      <Table.Td style={{ textAlign: "center" }}>
                        <span>{drug.quantity}</span>
                      </Table.Td>
                      <Table.Td style={{ textAlign: "center" }}>
                        <Badge color="red">{drug.price}</Badge>
                      </Table.Td>

                      {/* <Table.Td style={{ textAlign: "right" }}>
                      {drug.stock.map((stock) => (
                        <Table.Tr key={stock.id}>{stock.expiryDate}</Table.Tr>
                      ))}
                    </Table.Td> */}
                      <Table.Td style={{ textAlign: "right" }}>
                        {drug.stock
                          ?.map((stock) => stock.expiryDate)
                          .join(", ") || "N/A"}
                      </Table.Td>

                      <Table.Td style={{ textAlign: "center" }}>
                        <Button
                          style={{ backgroundColor: "green" }}
                          onClick={() => handleProductView(drug.id)}
                        >
                          📜
                        </Button>
                      </Table.Td>
                    </Table.Tr>
                  )
                )}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>

          <Grid mt={"xl"}>
            <Grid.Col span={4}>
              <Button fullWidth color="blue" onClick={() => {}}>
                Manage Drug
              </Button>
            </Grid.Col>
            <Grid.Col span={4}>
              <Button fullWidth color="green" onClick={() => {}}>
                Stock Management
              </Button>
            </Grid.Col>
            <Grid.Col span={4}>
              <Button fullWidth color="orange" onClick={() => {}}>
                Invoices
              </Button>
            </Grid.Col>
          </Grid>
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Fill the Form"
            centered
          >
            <form onSubmit={handleSubmit}>
              <Group justify="center" gap={"xl"} grow>
                <TextInput
                  label="Product Name"
                  placeholder="PCM 500mg Cap"
                  value={drugForm.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  // mb={"sm"}
                />

                <NumberInput
                  label="Quantity"
                  min={1}
                  value={drugForm.quantity}
                  onChange={(value) => handleInputChange("quantity", value)}
                  required
                  // mb={"sm"}
                />
              </Group>
              <Group justify="center" gap={"xl"} grow>
                <NumberInput
                  label="Price (₦)"
                  min={0}
                  value={drugForm.price}
                  onChange={(value) => handleInputChange("price", value)}
                  required
                  // mb={"sm"}
                />
                <DateInput
                  value={
                    drugForm.expiryDate ? new Date(drugForm.expiryDate) : null
                  }
                  onChange={(value) => handleInputChange("expiryDate", value)}
                  label="Expiring Date"
                  placeholder="ExPiring Date"
                />
              </Group>

              <Group mt="md">
                <Button type="submit" mt={"sm"} mb={"sm"}>
                  {loading ? "loading" : "➕ Add Product"}
                </Button>
              </Group>
            </form>
          </Modal>
          <button
            onClick={() => {
              router.push("/pages/purchase");
            }}
            className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-500 ease-in-out"
          >
            <span> Purchase</span>
          </button>
        </Stack>
      </Group>

      <ToastContainer
        autoClose={3000}
        position="top-center"
        closeOnClick={true}
        hideProgressBar={true}
        newestOnTop={true}
        theme="colored"
      />
    </Container>
  );
}
export default DashboardScreen;

/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import {
//   Card,
//   Container,
//   Grid,
//   Title,
//   Text,
//   Table,
//   Badge,
//   Button,
//   Group,
//   Stack,
//   TextInput,
//   Modal,
//   NumberInput,
// } from "@mantine/core";
// import { DateInput } from "@mantine/dates";
// import { toast, ToastContainer } from "react-toastify";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// interface Drug {
//   id: number;
//   name: string;
//   quantity: number;
//   price: number;
//   stock: { id: number; expiryDate: string }[];
//   purchase: { id: number; buyerName: string }[];
// }

// function DashboardScreen() {
//   // const router = useRouter();

//   // Dashboard stats
//   const [stats, setStats] = useState<{
//     totalDrugs: number;
//     lowStock: Drug[];
//     expiringInOneYear: Drug[];
//     purchase: Drug[];
//   }>({
//     totalDrugs: 0,
//     lowStock: [],
//     expiringInOneYear: [],
//     purchase: [],
//   });

//   // Drug Search
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<Drug[]>([]);

//   // Drug Form for Adding a New Drug
//   const [drugForm, setDrugForm] = useState({
//     id: 0,
//     name: "",
//     quantity: 1,
//     price: 0,
//     expiryDate: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [opened, setOpened] = useState(false);

//   // Fetch Dashboard Data
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get<{
//           totalDrugs: number;
//           lowStock: Drug[];
//           expiringInOneYear: Drug[];
//           purchase: [];
//         }>("http://localhost:3000/api/v1/dashboard/all");
//         setStats(response.data);
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   // Handle Search
//   const handleSearch = async (e: any) => {
//     e.preventDefault();
//     if (!query) return;

//     try {
//       const response = await axios.get(
//         `http://localhost:3000/api/v1/dashboard/search?query=${query}`
//       );
//       setResults(response.data);
//     } catch (error) {
//       console.error("Error Searching Products:", error);
//     }
//   };

//   // Handle Adding a New Drug
//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const createDrug = await axios.post(
//         "http://localhost:3000/api/v1/product/add",
//         drugForm
//       );

//       if (createDrug) {
//         toast.success(`${drugForm.name} is created`);
//         setOpened(false);
//       } else {
//         toast.error("Error in creating products");
//       }
//     } catch (error) {
//       toast.error("An error occurred");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle Drug Form Input Change
//   const handleInputChange = (field: string, value: any) => {
//     setDrugForm((prev) => ({
//       ...prev,
//       [field]: field === "expiryDate" && value ? value.toISOString() : value,
//     }));
//   };

//   return (
//     <Container mt="md">
//       {/* Dashboard Title */}
//       <Title order={2}>ECHI DRUG STORE DASHBOARD</Title>

//       {/* Dashboard Stats */}
//       <Grid mt="md">
//         <Grid.Col span={4}>
//           <Card shadow="sm" padding="lg" style={{ backgroundColor: "yellow" }}>
//             <Text size="lg" fw={700}>
//               Total Drugs
//             </Text>
//             <Text size="xl">{stats.totalDrugs}</Text>
//           </Card>
//         </Grid.Col>

//         <Grid.Col span={4}>
//           <Card shadow="sm" padding="lg" style={{ backgroundColor: "green", color: "white" }}>
//             <Text size="lg" fw={700}>
//               Low Stock
//             </Text>
//             <Text size="xl">{stats.lowStock.length}</Text>
//           </Card>
//         </Grid.Col>

//         <Grid.Col span={4}>
//           <Card shadow="sm" padding="lg" style={{ backgroundColor: "red" }}>
//             <Text size="lg" fw={700}>
//               Expiring Soon
//             </Text>
//             <Text size="xl">{stats.expiringInOneYear.length}</Text>
//           </Card>
//         </Grid.Col>
//       </Grid>

//       {/* Search Input */}
//       <Stack align="flex-end" mt="lg">
//         <Group>
//           <Text>Search: </Text>
//           <TextInput
//             placeholder="Search Drugs"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <Button onClick={handleSearch}>Search</Button>
//         </Group>
//       </Stack>

//       {/* Search Results */}
//       {results.length > 0 && (
//         <Table mt="lg">
//           <Table.Thead>
//             <Table.Tr>
//               <Table.Th>Drug Name</Table.Th>
//               <Table.Th>Quantity</Table.Th>
//               <Table.Th>Price (₦)</Table.Th>
//               <Table.Th>Expiry Date</Table.Th>
//             </Table.Tr>
//           </Table.Thead>
//           <Table.Tbody>
//             {results.map((drug) => (
//               <Table.Tr key={drug.id}>
//                 <Table.Td>{drug.name}</Table.Td>
//                 <Table.Td>{drug.quantity}</Table.Td>
//                 <Table.Td>
//                   <Badge color="red">{drug.price}</Badge>
//                 </Table.Td>
//                 <Table.Td>
//                   {drug.stock.length > 0 ? drug.stock[0].expiryDate : "N/A"}
//                 </Table.Td>
//               </Table.Tr>
//             ))}
//           </Table.Tbody>
//         </Table>
//       )}

//       {/* Add Drug Button */}
//       <Button mt="lg" onClick={() => setOpened(true)}>➕ Add Drug</Button>

//       {/* Add Drug Modal */}
//       <Modal opened={opened} onClose={() => setOpened(false)} title="Add Drug">
//         <form onSubmit={handleSubmit}>
//           <Group grow>
//             <TextInput
//               label="Product Name"
//               placeholder="PCM 500mg Cap"
//               value={drugForm.name}
//               onChange={(e) => handleInputChange("name", e.target.value)}
//               required
//             />
//             <NumberInput
//               label="Quantity"
//               min={1}
//               value={drugForm.quantity}
//               onChange={(value) => handleInputChange("quantity", value)}
//               required
//             />
//           </Group>

//           <Group grow mt="md">
//             <NumberInput
//               label="Price (₦)"
//               min={0}
//               value={drugForm.price}
//               onChange={(value) => handleInputChange("price", value)}
//               required
//             />
//             <DateInput
//               label="Expiring Date"
//               placeholder="Select Date"
//               value={drugForm.expiryDate ? new Date(drugForm.expiryDate) : null}
//               onChange={(value) => handleInputChange("expiryDate", value)}
//             />
//           </Group>

//           <Button type="submit" mt="md">{loading ? "Loading..." : "➕ Add Product"}</Button>
//         </form>
//       </Modal>

//       <ToastContainer autoClose={3000} position="top-center" />
//     </Container>
//   );
// }

// export default DashboardScreen;
