export const config = {
  runtime: 'edge',
};

export const POST = async (req: Request): Promise<Response> => {
  try {
    const { messages, url, conversationName } = await req.json();

    let messageToSend = messages[messages.length - 1].content;

    console.log("conversationName",conversationName)
    console.log("messageToSend",messageToSend)
    const res = await fetch("https://code.flows.network/webhook/E6Wh8hGaVwaFoI1nI9Lg", {
      headers: {
        'Content-Type': 'plain/text',
        'X-Conversation-Name': conversationName
      },
      method: 'POST',
      body: messageToSend,
    });

    const result = await res.text();
    if (res.status !== 200) {
      throw {status: res.status, text: result};
    }

    return new Response(result);
  } catch (error) {
    if (typeof error == 'string') {
      return new Response(error, { status: 500, statusText: error });
    } else if (typeof error == 'object' && error && (error as any).status) {
      let err = error as any;
      if (err.text.length > 256) {
        return new Response(err.text, { status: err.status });
      } else {
        return new Response(err.text, { status: err.status, statusText: err.text });
      }
    } else {
      return new Response('Error', { status: 500 });
    }
  }
};
