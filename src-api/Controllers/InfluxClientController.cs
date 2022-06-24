using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using InfluxDB.Client;

namespace InfluxApi.Controllers;

[ApiController]
[Route("[controller]")]
public class InfluxClientController : ControllerBase
{
    private readonly ILogger<InfluxClientController> _logger;

    public InfluxClientController(ILogger<InfluxClientController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetInfluxClient")]
    public async Task<ScatterChart> Get()
    {
      ScatterChart scatter = new ScatterChart();
      scatter.machineName = "Machine1";
      
      const string token = "ExHMZbplDNEB2lBFJn7MpRPbkC6FcxAvqMLaLCD03j_Fke3swvmwPprSfAKsGlqVBQ5-zeQGml4W4imwE3jXMQ==";
      const string org = "ashish.payal@globallogic.com";

      try
      {
         var influxDBClient = InfluxDBClientFactory.Create("https://us-east-1-1.aws.cloud2.influxdata.com", token);

            var flux = @" import ""influxdata/influxdb/sample"" option v = {timeRangeStart: -10m, timeRangeStop: now()} sample.data(set: ""airSensor"") |> range(start: v.timeRangeStart, stop: v.timeRangeStop) |> filter(fn: (r) => r[""_measurement""] == ""airSensors"") |> filter(fn: (r) => r[""_field""] == ""temperature"") ";
            
            var queryApi = influxDBClient.GetQueryApi();

            var tables = await queryApi.QueryAsync(flux, org);
            // foreach( var record in tables.SelectMany(table => table.Records)){
            //     Console.WriteLine(record);
            // }
            tables.ForEach(table =>
            {        
                table.Records.ForEach(record =>
                {
                    // InfluxData influxdata = new InfluxData();
                    // influxdata.timestamp = record.GetTimeInDateTime();
                    // influxdata.value = record.GetValueByKey("_value").ToString();
                    // scatter.data.Add(influxdata);
                     Console.WriteLine($"{record.GetTime()}: {record.GetValueByKey("_value")}");
                });
            });

            influxDBClient.Dispose();
      }
      catch (Exception ex)
      {     
        throw ex;
      }
        return scatter;
    }

}
