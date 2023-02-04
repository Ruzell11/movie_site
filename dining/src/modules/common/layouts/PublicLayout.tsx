import React, { ReactNode } from "react";

type ChildrenProps = {
    children: ReactNode;

}
export const PublicLayout = ({ children }: ChildrenProps) => (
    <>
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 h-14 flex justify-center items-center font-semibold uppercase">
                Navbar
            </header>
            <div className="flex flex-col md:flex-row flex-1">
                <main className="flex-1">{children}</main>
            </div>
        </div>
        <div>FOOTER</div>
    </>
);