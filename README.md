# 🌙 DreamChain

**DreamChain** is a web-based platform that transforms user prompts (dreams, ideas, thoughts) into AI-generated NFTs in formats like `PNG`, `MP3`, `MP4`, etc. These NFTs are minted and 
can be browsed or traded on a built-in marketplace.

---

## 🧠 Core Features

- 📝 User prompt input (dream descriptions)
- 🎨 AI-generated media using AgentKit
- 🖼️ NFT creation in multiple formats: PNG, JPEG, MP3, MP4
- 🔗 Minting NFTs to blockchain (via Web3 + IPFS)
- 🛍️ NFT marketplace (view, list, transfer)
- 👛 Wallet login (MetaMask) support

---

## ⚙️ Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Backend API  | FastAPI (Python)                    |
| Database     | SupaBase                |
| AI Engine    | AgentKit                            |
| Blockchain   | Web3.py + NFT.Storage/IPFS          |
| Frontend     | React/Next.js (external repo)       |
| Auth         | WalletAuth (MetaMask)               |

---

## 🗂️ Project Structure

1. User Input
   Frontend takes a dream or prompt from the user and sends it to FastAPI backend via REST endpoint.

2. AI Generation (AgentKit)
   Backend sends the prompt to AgentKit → gets back a media file (image, audio, or video).

3. Media Upload (IPFS/Pinata)
   The generated media is uploaded to IPFS via Pinata → returns a content hash (CID).

5. Metadata Creation
   Create an NFT metadata JSON with media link, title, and description.

6. NFT Minting (Web3)
   Use Web3.py to call a smart contract on Ethereum or Polygon, mint the NFT using metadata URI.

7. Database Logging
   Store metadata, user info, and minted token ID into MongoDB.

8. Frontend Display
   Show the minted NFT, status, and transaction hash back to the user.

#System Architecture:
![image](https://github.com/user-attachments/assets/8ec5272a-1528-4be9-8867-e4ee882c56e2)

#DFD:
![image](https://github.com/user-attachments/assets/1a404b28-98bc-4965-a174-9363cfd423d1)




