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
            margin-bottom: 30px;
            padding: 20px;
        }

        .header h1 {
            font-size: clamp(20px, 4vw, 36px);
            font-weight: 700;
            color: #4da6ff;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .header p {
            font-size: clamp(12px, 1.5vw, 16px);
            color: #8aa4c4;
            margin-top: 8px;
        }

        .landscape-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            max-width: 1600px;
            margin: 0 auto;
        }

        @media (min-width: 768px) {
            .landscape-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (min-width: 1024px) {
            .landscape-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media (min-width: 1400px) {
            .landscape-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        .category {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            padding: 18px;
            border: 2px solid;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            min-height: 280px;
        }

        .category:nth-child(6n+1) { border-color: #4da6ff; }
        .category:nth-child(6n+2) { border-color: #10b981; }
        .category:nth-child(6n+3) { border-color: #f59e0b; }
        .category:nth-child(6n+4) { border-color: #ef4444; }
        .category:nth-child(6n+5) { border-color: #8b5cf6; }
        .category:nth-child(6n+6) { border-color: #ec4899; }

        .category:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(77, 166, 255, 0.15);
        }

        .category-header {
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid currentColor;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: inherit;
        }

        .category:nth-child(6n+1) .category-header { color: #4da6ff; }
        .category:nth-child(6n+2) .category-header { color: #10b981; }
        .category:nth-child(6n+3) .category-header { color: #f59e0b; }
        .category:nth-child(6n+4) .category-header { color: #ef4444; }
        .category:nth-child(6n+5) .category-header { color: #8b5cf6; }
        .category:nth-child(6n+6) .category-header { color: #ec4899; }

        .companies-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            flex: 1;
        }

        .company-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 12px 8px;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 75px;
        }

        .company-card:hover {
            transform: translateY(-2px);
            border-color: rgba(77, 166, 255, 0.5);
            background: rgba(77, 166, 255, 0.1);
            box-shadow: 0 4px 12px rgba(77, 166, 255, 0.2);
        }

        .company-logo {
            font-size: 24px;
            margin-bottom: 6px;
        }

        .company-name {
            font-size: 11px;
            font-weight: 500;
            color: #fff;
            line-height: 1.2;
            word-break: break-word;
        }

        .status-badge {
            position: absolute;
            top: 5px;
            right: 5px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
        }

        .status-active { background: #10b981; }
        .status-beta { background: #f59e0b; }
        .status-archived { background: #6b7280; }

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(5px);
            z-index: 1000;
            padding: 20px;
            overflow-y: auto;
            animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .modal.active {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modal-content {
            background: linear-gradient(135deg, #1a2940 0%, #0a1628 100%);
            border: 2px solid #4da6ff;
            border-radius: 16px;
            padding: 32px;
            max-width: 550px;
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
            top: 16px;
            right: 16px;
            background: none;
            border: none;
            color: #8aa4c4;
            font-size: 24px;
            cursor: pointer;
            transition: color 0.2s;
            width: 32px;
            height: 32px;
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
            margin-bottom: 20px;
            gap: 16px;
        }

        .modal-logo {
            font-size: 40px;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(77, 166, 255, 0.1);
            border-radius: 12px;
            flex-shrink: 0;
        }

        .modal-title {
            flex: 1;
        }

        .modal-title h2 {
            font-size: 24px;
            color: #4da6ff;
            margin-bottom: 6px;
        }

        .modal-status {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .modal-status.active {
            background: rgba(16, 185, 129, 0.2);
            color: #10b981;
        }

        .modal-status.beta {
            background: rgba(245, 158, 11, 0.2);
            color: #f59e0b;
        }

        .modal-status.archived {
            background: rgba(107, 114, 128, 0.2);
            color: #9ca3af;
        }

        .modal-body {
            margin-bottom: 20px;
        }

        .modal-body p {
            color: #8aa4c4;
            line-height: 1.6;
            font-size: 15px;
        }

        .modal-link {
            display: inline-block;
            background: #4da6ff;
            color: #fff;
            padding: 10px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.3s;
        }

        .modal-link:hover {
            background: #3d8fe6;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(77, 166, 255, 0.4);
        }

        .footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            color: #6b7280;
            font-size: 12px;
        }

        /* Larger categories */
        .category.large {
            grid-column: span 2;
        }

        @media (max-width: 767px) {
            .category.large {
                grid-column: span 1;
            }
        }

        @media (min-width: 1400px) {
            .category.large .companies-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🤖 AI AGENTS INFRASTRUCTURE LANDSCAPE</h1>
        <p>Comprehensive ecosystem map of tools and frameworks for building AI agents</p>
    </div>

    <div class="landscape-grid" id="landscape"></div>

    <div class="footer">
        <p>Last updated: October 2025 | Community-driven landscape</p>
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
        const landscapeData = {
            "Frameworks & SDKs": {
                large: true,
                companies: [
                    { name: "LangGraph", logo: "🔗", status: "active", description: "Build stateful, multi-actor applications with LLMs. Create cyclical graphs for agent workflows with persistence and streaming.", link: "https://github.com/langchain-ai/langgraph" },
                    { name: "OpenAI Agents", logo: "🤖", status: "active", description: "Official OpenAI SDK for building autonomous agents. Includes function calling, streaming, and multi-turn conversations.", link: "https://platform.openai.com/docs/guides/agents" },
                    { name: "AutoGPT", logo: "⚡", status: "active", description: "An autonomous AI agent that chains together LLM thoughts to autonomously achieve goals you set.", link: "https://github.com/Significant-Gravitas/AutoGPT" },
                    { name: "CrewAI", logo: "👥", status: "active", description: "Framework for orchestrating role-playing autonomous AI agents. Enables collaborative intelligence with specialized agents.", link: "https://github.com/joaomdmoura/crewAI" },
                    { name: "Semantic Kernel", logo: "🧠", status: "active", description: "Microsoft's SDK for integrating AI services into applications. Supports plugins, planning, and memory.", link: "https://github.com/microsoft/semantic-kernel" },
                    { name: "LlamaIndex", logo: "🦙", status: "active", description: "Data framework for LLM applications. Connect custom data sources to large language models.", link: "https://github.com/run-llama/llama_index" },
                    { name: "Haystack", logo: "🌾", status: "active", description: "End-to-end NLP framework for building production-ready search systems and agents.", link: "https://github.com/deepset-ai/haystack" },
                    { name: "LangChain", logo: "⛓️", status: "active", description: "Popular framework for developing applications powered by language models. Includes chains, agents, and memory.", link: "https://github.com/langchain-ai/langchain" }
                ]
            },
            "Orchestration": {
                companies: [
                    { name: "Prefect", logo: "🌊", status: "active", description: "Modern workflow orchestration platform for data and ML pipelines. Great for agent workflows.", link: "https://github.com/PrefectHQ/prefect" },
                    { name: "Temporal", logo: "⏱️", status: "active", description: "Durable execution system for running reliable distributed applications including AI agents.", link: "https://temporal.io" },
                    { name: "Airflow", logo: "🌬️", status: "active", description: "Platform to programmatically author, schedule and monitor workflows. Useful for agent pipelines.", link: "https://airflow.apache.org" },
                    { name: "n8n", logo: "🔄", status: "active", description: "Workflow automation tool for connecting AI agents with various services and APIs.", link: "https://n8n.io" }
                ]
            },
            "Memory & Vectors": {
                companies: [
                    { name: "Mem0", logo: "💾", status: "active", description: "Memory layer for AI agents. Provides persistent, personalized memory across conversations.", link: "https://github.com/mem0ai/mem0" },
                    { name: "Zep", logo: "🐘", status: "active", description: "Long-term memory store for AI assistants and agents. Fast, scalable vector search.", link: "https://github.com/getzep/zep" },
                    { name: "Chroma", logo: "🎨", status: "active", description: "Open-source embedding database for AI applications. Perfect for agent memory.", link: "https://github.com/chroma-core/chroma" },
                    { name: "Pinecone", logo: "🌲", status: "active", description: "Managed vector database for long-term memory in production AI applications.", link: "https://www.pinecone.io" },
                    { name: "Weaviate", logo: "🔮", status: "active", description: "Open-source vector search engine with built-in ML models for agent memory.", link: "https://github.com/weaviate/weaviate" },
                    { name: "Qdrant", logo: "🎯", status: "active", description: "Vector database optimized for high-performance similarity search for AI agents.", link: "https://qdrant.tech" }
                ]
            },
            "Observability": {
                companies: [
                    { name: "LangSmith", logo: "🔍", status: "active", description: "Platform for debugging, testing, and monitoring LLM applications and agents.", link: "https://www.langchain.com/langsmith" },
                    { name: "W&B", logo: "📊", status: "active", description: "MLOps platform for tracking agent experiments and performance.", link: "https://wandb.ai" },
                    { name: "Helicone", logo: "🚁", status: "active", description: "Open-source observability platform for LLM applications. Monitor costs and performance.", link: "https://github.com/Helicone/helicone" },
                    { name: "Phoenix", logo: "🔥", status: "active", description: "Open-source observability tool for LLMs and agents. Trace and debug agent behavior.", link: "https://github.com/Arize-ai/phoenix" }
                ]
            },
            "Tool Integration": {
                companies: [
                    { name: "Zapier", logo: "⚙️", status: "active", description: "Connect agents to 5000+ apps. Automate workflows and integrate external services.", link: "https://zapier.com" },
                    { name: "Make", logo: "🔧", status: "active", description: "Visual platform to connect apps and automate workflows for AI agents.", link: "https://www.make.com" },
                    { name: "Composio", logo: "🎯", status: "beta", description: "Unified API for agent tools. Connect agents to 100+ external services.", link: "https://composio.dev" },
                    { name: "Browser Base", logo: "🌐", status: "active", description: "Headless browser automation for AI agents. Web scraping and interaction.", link: "https://browserbase.com" }
                ]
            },
            "Code Execution": {
                companies: [
                    { name: "E2B", logo: "💻", status: "active", description: "Secure sandboxed code execution for AI agents. Run untrusted code safely.", link: "https://e2b.dev" },
                    { name: "Modal", logo: "⚡", status: "active", description: "Serverless platform for running AI workloads and agent code execution.", link: "https://modal.com" },
                    { name: "Replit", logo: "🔨", status: "active", description: "Cloud development environment with AI capabilities for agent code execution.", link: "https://replit.com" },
                    { name: "CodeSandbox", logo: "📦", status: "active", description: "Online code editor and sandbox for agent development and testing.", link: "https://codesandbox.io" }
                ]
            },
            "Agent Platforms": {
                companies: [
                    { name: "AgentGPT", logo: "🎮", status: "active", description: "Platform to assemble, configure, and deploy autonomous AI agents directly in browser.", link: "https://github.com/reworkd/AgentGPT" },
                    { name: "SuperAGI", logo: "🦸", status: "active", description: "Open-source autonomous AI agent framework. Deploy agents with various tools.", link: "https://github.com/TransformerOptimus/SuperAGI" },
                    { name: "BabyAGI", logo: "👶", status: "active", description: "Task-driven autonomous agent using OpenAI and Pinecone APIs.", link: "https://github.com/yoheinakajima/babyagi" },
                    { name: "Cognosys", logo: "🧩", status: "beta", description: "No-code platform for building and deploying AI agents for business automation.", link: "https://www.cognosys.ai" }
                ]
            },
            "LLM Providers": {
                companies: [
                    { name: "OpenAI", logo: "⭕", status: "active", description: "Leading AI research lab providing GPT models and APIs for agent development.", link: "https://openai.com" },
                    { name: "Anthropic", logo: "🔺", status: "active", description: "AI safety company behind Claude, offering powerful models for agent applications.", link: "https://anthropic.com" },
                    { name: "Google AI", logo: "🟦", status: "active", description: "Google's AI offerings including Gemini models for building intelligent agents.", link: "https://ai.google" },
                    { name: "Mistral", logo: "💨", status: "active", description: "European AI company providing efficient open-source and API models.", link: "https://mistral.ai" }
                ]
            },
            "Prompt Engineering": {
                companies: [
                    { name: "PromptLayer", logo: "📝", status: "active", description: "Platform for managing, versioning, and analyzing prompts for AI agents.", link: "https://promptlayer.com" },
                    { name: "Humanloop", logo: "♾️", status: "active", description: "Collaborative platform for prompt engineering and LLM application development.", link: "https://humanloop.com" },
                    { name: "Promptfoo", logo: "🧪", status: "active", description: "Test and evaluate LLM prompts for agent reliability and performance.", link: "https://github.com/promptfoo/promptfoo" },
                    { name: "Parea", logo: "🎨", status: "beta", description: "Platform for testing, monitoring, and improving LLM applications and agents.", link: "https://parea.ai" }
                ]
            },
            "Knowledge Bases": {
                companies: [
                    { name: "Notion", logo: "📋", status: "active", description: "Collaborative workspace that can serve as knowledge base for AI agents.", link: "https://notion.so" },
                    { name: "Obsidian", logo: "💎", status: "active", description: "Local-first knowledge management tool for organizing agent information.", link: "https://obsidian.md" },
                    { name: "Confluence", logo: "🌊", status: "active", description: "Team collaboration software for storing agent documentation and knowledge.", link: "https://www.atlassian.com/software/confluence" },
                    { name: "GitBook", logo: "📚", status: "active", description: "Documentation platform for building knowledge bases for AI agent systems.", link: "https://gitbook.com" }
                ]
            },
            "Testing & QA": {
                companies: [
                    { name: "Braintrust", logo: "🧪", status: "active", description: "Enterprise platform for evaluating and improving AI agent performance.", link: "https://braintrustdata.com" },
                    { name: "DeepEval", logo: "📈", status: "active", description: "Open-source testing framework for LLM applications and agents.", link: "https://github.com/confident-ai/deepeval" },
                    { name: "Giskard", logo: "🛡️", status: "active", description: "Testing and validation platform for ML models and AI agents.", link: "https://giskard.ai" },
                    { name: "Arthur", logo: "🎯", status: "beta", description: "ML monitoring and testing platform for production AI agents.", link: "https://arthur.ai" }
                ]
            },
            "Multi-Agent": {
                companies: [
                    { name: "AutoGen", logo: "🤝", status: "active", description: "Microsoft's framework for building multi-agent conversation systems.", link: "https://github.com/microsoft/autogen" },
                    { name: "MetaGPT", logo: "🏢", status: "active", description: "Multi-agent framework simulating software company roles for task completion.", link: "https://github.com/geekan/MetaGPT" },
                    { name: "CAMEL", logo: "🐫", status: "active", description: "Communicative Agents for Mind Exploration of LLMs framework.", link: "https://github.com/camel-ai/camel" },
                    { name: "ChatDev", logo: "💼", status: "active", description: "Virtual software company powered by multiple intelligent agents.", link: "https://github.com/OpenBMB/ChatDev" }
                ]
            }
        };

        function renderLandscape() {
            const container = document.getElementById('landscape');
            
            Object.entries(landscapeData).forEach(([category, data]) => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'category';
                if (data.large) {
                    categoryDiv.classList.add('large');
                }
                
                const categoryHeader = document.createElement('div');
                categoryHeader.className = 'category-header';
                categoryHeader.textContent = category;
                
                const grid = document.createElement('div');
                grid.className = 'companies-grid';
                
                const companies = data.companies || data;
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

        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.id === 'modal') closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });

        renderLandscape();
    </script>
</body>
</html>
