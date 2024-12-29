import "@/layout/NavigationBar";
import "@/layout/Header";
import "@/components/organisms/ExhibitCard";
import client from "@/api/pocketbase";

console.log(client.collection("users"));
