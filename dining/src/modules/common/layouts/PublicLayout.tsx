import React, { ReactNode } from "react";
import { Header } from "./components/Header";

type ChildrenProps = {
    children: ReactNode;

}
export const PublicLayout = ({ children }: ChildrenProps) => (
    <>
        <div className="min-h-screen flex flex-col">
                <Header/>
            <div className="flex flex-col md:flex-row flex-1">
                <main className="flex-1">{children}</main>
            </div>
        </div>
        <div>FOOTER</div>
    </>
);