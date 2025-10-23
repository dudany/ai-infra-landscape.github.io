<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Agents Infrastructure Landscape</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #0a1628 0%, #1a2940 100%);
            color: #fff;
            padding: 20px;
            min-height: 100vh;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 30px 20px;
        }

        .header h1 {
            font-size: clamp(24px, 5vw, 48px);
            font-weight: 700;
            color: #4da6ff;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .header p {
            font-size: clamp(14px, 2vw, 18px);
            color: #8aa4c4;
            margin-top: 10px;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
        }

        .category {
            margin-bottom: 50px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            padding: 30px;
            border: 1px solid rgba(77, 166, 255, 0.1);
            transition: all 0.3s ease;
        }

        .category:hover {
            border-color: rgba(77, 166, 255, 0.3);
        }

        .category-header {
            font-size: clamp(18px, 3vw, 24px);
            font-weight: 600;
            color: #4da6ff;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid rgba(77, 166, 255, 0.3);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .companies-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 15px;
        }

        @media (max-width: 768px) {
            .companies-grid {
                grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
                gap: 10px;
            }
        }

        .company-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .company-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(77, 166, 255, 0.1), rgba(77, 166, 255, 0));
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .company-card:hover {
            transform: translateY(-5px);
            border-color: #4da6ff;
            box-shadow: 0 8px 25px rgba(77, 166, 255, 0.2);
        }

        .company-card:hover::before {
            opacity: 1;
        }

        .company-logo {
            width: 60px;
            height: 60px;
            margin: 0 auto 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            position: relative;
            z-index: 1;
        }

        .company-name {
            font-size: 14px;
            font-weight: 500;
            color: #fff;
            position: relative;
            z-index: 1;
        }

        .status-badge {
            position: absolute;
            top: 8px;
            right: 8px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            z-index: 2;
        }

        .status-active { background: #4ade80; }
        .status-beta { background: #fbbf24; }
        .status-archived { background: #94a3b8; }

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
            z-index: 1000;
            padding: 20px;
            overflow-y: auto;
        }

        .modal.active {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modal-content {
            background: linear-gradient(135deg, #1a2940 0%, #0a1628 100%);
            border: 2px solid #4da6ff;
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            position: relative;
            box-shadow: 0 20px 60px rgba(77, 166, 255, 0.3);
            animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .modal-close {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            color: #8aa4c4;
            font-size: 28px;
            cursor: pointer;
            transition: color 0.2s;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modal-close:hover {
            color: #4da6ff;
        }

        .modal-header {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            gap: 20px;
        }

        .modal-logo {
            font-size: 48px;
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(77, 166, 255, 0.1);
            border-radius: 16px;
        }

        .modal-title {
            flex: 1;
        }

        .modal-title h2 {
            font-size: 28px;
            color: #4da6ff;
            margin-bottom: 5px;
        }

        .modal-status {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .modal-status.active {
            background: rgba(74, 222, 128, 0.2);
            color: #4ade80;
        }

        .modal-status.beta {
            background: rgba(251, 191, 36, 0.2);
            color: #fbbf24;
        }

        .modal-status.archived {
            background: rgba(148, 163, 184, 0.2);
            color: #94a3b8;
        }

        .modal-body {
            margin-bottom: 25px;
        }

        .modal-body p {
            color: #8aa4c4;
            line-height: 1.6;
            font-size: 16px;
        }

        .modal-link {
            display: inline-block;
            background: #4da6ff;
            color: #fff;
            padding: 12px 30px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
        }

        .modal-link:hover {
            background: #3d8fe6;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(77, 166, 255, 0.4);
        }

        .footer {
            text-align: center;
            margin-top: 60px;
            padding: 30px;
            color: #8aa4c4;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🤖 AI Agents Infrastructure Landscape</h1>
        <p>Comprehensive overview of tools and frameworks for building AI agents</p>
    </div>

    <div class="container" id="landscape"></div>

    <div class="footer">
        <p>Last updated: October 2025 | Built with ❤️ for the AI community</p>
    </div>

    <div class="modal" id="modal">
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()">&times;</button>
            <div class="modal-header">
                <div class="modal-logo" id="modal-logo"></div>
                <div class="modal-title">
                    <h2 id="modal-name"></h2>
                    <span class="modal-status" id="modal-status"></span>
                </div>
            </div>
            <div class="modal-body">
                <p id="modal-description"></p>
            </div>
            <a href="#" id="modal-link" class="modal-link" target="_blank">Visit Website →</a>
        </div>
    </div>

    <script>
        // Data structure - easily extendable
        const landscapeData = {
            "Frameworks & SDKs": [
                { name: "LangGraph", logo: "🔗", status: "active", description: "Build stateful, multi-actor applications with LLMs. Create cyclical graphs for agent workflows with persistence and streaming.", link: "https://github.com/langchain-ai/langgraph" },
                { name: "OpenAI Agents SDK", logo: "🤖", status: "active", description: "Official OpenAI SDK for building autonomous agents. Includes function calling, streaming, and multi-turn conversations.", link: "https://platform.openai.com/docs/guides/agents" },
                { name: "AutoGPT", logo: "⚡", status: "active", description: "An autonomous AI agent that chains together LLM thoughts to autonomously achieve goals you set.", link: "https://github.com/Significant-Gravitas/AutoGPT" },
                { name: "CrewAI", logo: "👥", status: "active", description: "Framework for orchestrating role-playing autonomous AI agents. Enables collaborative intelligence with specialized agents.", link: "https://github.com/joaomdmoura/crewAI" },
                { name: "Semantic Kernel", logo: "🧠", status: "active", description: "Microsoft's SDK for integrating AI services into applications. Supports plugins, planning, and memory.", link: "https://github.com/microsoft/semantic-kernel" },
                { name: "LlamaIndex", logo: "🦙", status: "active", description: "Data framework for LLM applications. Connect custom data sources to large language models.", link: "https://github.com/run-llama/llama_index" }
            ],
            "Orchestration & Workflow": [
                { name: "LangChain", logo: "⛓️", status: "active", description: "Popular framework for developing applications powered by language models. Includes chains, agents, and memory.", link: "https://github.com/langchain-ai/langchain" },
                { name: "Haystack", logo: "🌾", status: "active", description: "End-to-end NLP framework for building production-ready search systems and agents.", link: "https://github.com/deepset-ai/haystack" },
                { name: "Prefect", logo: "🌊", status: "active", description: "Modern workflow orchestration platform for data and ML pipelines. Great for agent workflows.", link: "https://github.com/PrefectHQ/prefect" },
                { name: "Temporal", logo: "⏱️", status: "active", description: "Durable execution system for running reliable distributed applications including AI agents.", link: "https://temporal.io" },
                { name: "Airflow", logo: "🌬️", status: "active", description: "Platform to programmatically author, schedule and monitor workflows. Useful for agent pipelines.", link: "https://airflow.apache.org" }
            ],
            "Memory & State": [
                { name: "Mem0", logo: "💾", status: "active", description: "Memory layer for AI agents. Provides persistent, personalized memory across conversations.", link: "https://github.com/mem0ai/mem0" },
                { name: "Zep", logo: "🐘", status: "active", description: "Long-term memory store for AI assistants and agents. Fast, scalable vector search.", link: "https://github.com/getzep/zep" },
                { name: "Chroma", logo: "🎨", status: "active", description: "Open-source embedding database for AI applications. Perfect for agent memory.", link: "https://github.com/chroma-core/chroma" },
                { name: "Pinecone", logo: "🌲", status: "active", description: "Managed vector database for long-term memory in production AI applications.", link: "https://www.pinecone.io" },
                { name: "Weaviate", logo: "🔮", status: "active", description: "Open-source vector search engine with built-in ML models for agent memory.", link: "https://github.com/weaviate/weaviate" }
            ],
            "Evaluation & Monitoring": [
                { name: "LangSmith", logo: "🔍", status: "active", description: "Platform for debugging, testing, and monitoring LLM applications and agents.", link: "https://www.langchain.com/langsmith" },
                { name: "Weights & Biases", logo: "📊", status: "active", description: "MLOps platform for tracking agent experiments and performance.", link: "https://wandb.ai" },
                { name: "Helicone", logo: "🚁", status: "active", description: "Open-source observability platform for LLM applications. Monitor costs and performance.", link: "https://github.com/Helicone/helicone" },
                { name: "Phoenix", logo: "🔥", status: "active", description: "Open-source observability tool for LLMs and agents. Trace and debug agent behavior.", link: "https://github.com/Arize-ai/phoenix" },
                { name: "Langfuse", logo: "📈", status: "active", description: "Open-source LLM engineering platform. Trace, evaluate and monitor agents.", link: "https://github.com/langfuse/langfuse" }
            ],
            "Tools & Integrations": [
                { name: "Zapier", logo: "⚙️", status: "active", description: "Connect agents to 5000+ apps. Automate workflows and integrate external services.", link: "https://zapier.com" },
                { name: "Make", logo: "🔧", status: "active", description: "Visual platform to connect apps and automate workflows for AI agents.", link: "https://www.make.com" },
                { name: "Composio", logo: "🎯", status: "beta", description: "Unified API for agent tools. Connect agents to 100+ external services.", link: "https://composio.dev" },
                { name: "Browser Base", logo: "🌐", status: "active", description: "Headless browser automation for AI agents. Web scraping and interaction.", link: "https://browserbase.com" },
                { name: "E2B", logo: "💻", status: "active", description: "Secure sandboxed code execution for AI agents. Run untrusted code safely.", link: "https://e2b.dev" }
            ],
            "Agent Platforms": [
                { name: "AgentGPT", logo: "🎮", status: "active", description: "Platform to assemble, configure, and deploy autonomous AI agents directly in browser.", link: "https://github.com/reworkd/AgentGPT" },
                { name: "SuperAGI", logo: "🦸", status: "active", description: "Open-source autonomous AI agent framework. Deploy agents with various tools.", link: "https://github.com/TransformerOptimus/SuperAGI" },
                { name: "BabyAGI", logo: "👶", status: "active", description: "Task-driven autonomous agent using OpenAI and Pinecone APIs.", link: "https://github.com/yoheinakajima/babyagi" },
                { name: "Cognosys", logo: "🧩", status: "beta", description: "No-code platform for building and deploying AI agents for business automation.", link: "https://www.cognosys.ai" }
            ]
        };

        // Render landscape
        function renderLandscape() {
            const container = document.getElementById('landscape');
            
            Object.entries(landscapeData).forEach(([category, companies]) => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'category';
                
                const categoryHeader = document.createElement('div');
                categoryHeader.className = 'category-header';
                categoryHeader.textContent = category;
                
                const grid = document.createElement('div');
                grid.className = 'companies-grid';
                
                companies.forEach(company => {
                    const card = document.createElement('div');
                    card.className = 'company-card';
                    card.onclick = () => openModal(company);
                    
                    const statusBadge = document.createElement('div');
                    statusBadge.className = `status-badge status-${company.status}`;
                    
                    const logo = document.createElement('div');
                    logo.className = 'company-logo';
                    logo.textContent = company.logo;
                    
                    const name = document.createElement('div');
                    name.className = 'company-name';
                    name.textContent = company.name;
                    
                    card.appendChild(statusBadge);
                    card.appendChild(logo);
                    card.appendChild(name);
                    grid.appendChild(card);
                });
                
                categoryDiv.appendChild(categoryHeader);
                categoryDiv.appendChild(grid);
                container.appendChild(categoryDiv);
            });
        }

        // Modal functions
        function openModal(company) {
            document.getElementById('modal-logo').textContent = company.logo;
            document.getElementById('modal-name').textContent = company.name;
            document.getElementById('modal-description').textContent = company.description;
            document.getElementById('modal-link').href = company.link;
            
            const statusEl = document.getElementById('modal-status');
            statusEl.textContent = company.status;
            statusEl.className = `modal-status ${company.status}`;
            
            document.getElementById('modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close modal on outside click
        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.id === 'modal') {
                closeModal();
            }
        });

        // Close modal on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Initialize
        renderLandscape();
    </script>
</body>
</html>
