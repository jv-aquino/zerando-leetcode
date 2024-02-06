import { ExternalLink } from "lucide-react";

function Navbar() {
  return ( 
    <nav className="flex items-center justify-between px-12 py-5 mb-8 border-b border-gray-700">
      <h1 className="text-2xl">Zerando LeetCode</h1>

      <ul className="flex gap-5">
        <li><a href="/solucoes">Soluções</a></li>
        <li><a href="https://leetcode.com/problemset/" target="_blank">LeetCode <ExternalLink className="h-4 w-4 inline relative bottom-[1px]" /></a></li>
      </ul>  
    </nav>
   );
}

export default Navbar;