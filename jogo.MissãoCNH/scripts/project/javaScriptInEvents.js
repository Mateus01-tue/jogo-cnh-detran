

const scriptsInEvents = {

	async FolhaDeEventos4_Event4(runtime, localVars)
	{
		if (!window.mensagemMostrada) {
		
		    alert("🎉 Parabéns! Você foi aprovado!\n\nContinue se esforçando que você vai conseguir passar na prova!");
		
		    window.mensagemMostrada = true;
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
