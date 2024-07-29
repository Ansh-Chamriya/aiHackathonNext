"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  AdvancedRealTimeChart,
  CopyrightStyles,
} from "react-ts-tradingview-widgets";
import { TickerTape } from "react-ts-tradingview-widgets";

export async function Chat() {
  const [darkMode, setDarkMode] = useState(true);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const styles: CopyrightStyles = {
    parent: {
      display: "none",
    },
  };
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data = await fetch(
  //         "https://d6dz717n-8000.inc1.devtunnels.ms/predict",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             "access-control-allow-origin": "*",
  //             Accept: "*/*",
  //           },
  //           body: JSON.stringify({
  //             description: "Stock XYZ is expected to rise by 5%.",
  //           }),
  //         }
  //       );
  //       const result = await data.json();
  //       setResponse(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setLoading(false);
  //       console.log(response);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <div
      className={`flex flex-col h-full ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <header
        className={`flex items-center justify-between p-2 border-b border-gray-700 h-14 ${
          !darkMode ? "bg-gray-100" : " "
        }`}
      >
        <div className="flex items-center space-x-2">
          <SparkleIcon
            className={`w-6 h-6 ${
              darkMode ? "text-purple-500" : "text-purple-700"
            }`}
          />
          <span>Stock Saarthi</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <GithubIcon className="w-6 h-6" />
          </Button>
          <div className="flex items-center space-x-2">
            <Label className="text-sm flex items-center space-x-2">
              {darkMode ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </Label>
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
              className={`ring-orange-500 focus:ring-2 rounded-full ${
                darkMode ? "ring-2 ring-orange-500" : ""
              }`}
            />
          </div>
        </div>
      </header>
      <TickerTape copyrightStyles={styles} colorTheme="dark" />
      <main className="flex flex-1 relative">
        <section className="">
          <AdvancedRealTimeChart
            container_id="tradingview_1"
            theme="dark"
            width={980}
            symbol="BSE:ITC"
            timezone="Asia/Kolkata"
            height={570}
            // autosize
            interval="D"
            allow_symbol_change={true}
            details={true}
            copyrightStyles={styles}
          ></AdvancedRealTimeChart>
        </section>
        <section className="w-1/3 p-4 flex-shrink-0 overflow-auto">
          <div
            className={`border-l border-${
              darkMode ? "gray-700" : "gray-300"
            } h-full`}
          >
            <Card
              className={`h-[100%] ${
                !darkMode ? "bg-[#111827] text-white" : "bg-white"
              }`}
            >
              <CardHeader>
                <CardTitle>Chatbot Response</CardTitle>
                <CardDescription className="text-gray-400">
                  Responses from the stock market analyst model will appear
                  here.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto">
                <div className="space-y-4">
                  <p>Response 1: Stock XYZ is expected to rise by 5%.</p>
                  <p>Response 2: Stock ABC has a stable outlook.</p>
                  <p>Response 3: Consider buying stock DEF.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="p-[0.66rem]  border-t border-gray-700">
        <div className="flex items-center space-x-2">
          {/* <PlusIcon className="w-6 h-6" /> */}
          <form action="">
            <Input
              placeholder="Enter the prompt."
              className={`flex-1 rounded-full px-4 py-1 w-64 text-gray-600 ${
                !darkMode ? "bg-gray-900 text-gray-100" : ""
              }`}
            />
            <Button
              variant={`${!darkMode ? "default" : "secondary"}`}
              className="rounded-full"
            >
              <Send color={`${!darkMode ? "#ffffff" : "#0d0808"}`} />
            </Button>
          </form>
        </div>
      </footer>
    </div>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function SparkleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
