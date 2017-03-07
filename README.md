# memory-queue
- MemoryQueueのTypeScript用の実装を提供します
- Node.jsで利用することを想定しています

## Setup
### package.json
```
    "dependencies": {
        "@cross-border-bridge/memory-queue": "~2.0.0"
    },
```

## Usage
#### step 1: import

```typescript
import * as mq from "@cross-border-bridge/memory-queue";
```

#### step 2: MemoryQueueを準備
送信データの受け口のハンドラを設定してMemoryQueueを生成します。

```typescript
    var memoryQueue: mq.MemoryQueue = new mq.MemoryQueue(function() {
        console.log("Received data: " + JSON.stringify(arguments));
	});
```

- ハンドラは, `MemoryQueue#setHandler` で変更することができます
- ハンドラが `undefined` の場合, 送信されたデータはロストします

#### step 3: データの送信
`MemoryQueue#send` でデータを送信します。

```typescript
    memoryQueue.send("This", "is", "test.");
```

## License
[MIT](LICENSE)
